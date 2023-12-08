from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.db import connection, OperationalError
from rest_framework.decorators import action
from rest_framework import viewsets, serializers, status
from datetime import timedelta, datetime
from rest_framework.response import Response
from django.db.models import Count



from production import models
from production import serializers

from config import models as config_models



class defaultPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class productionPlanningList(generics.ListCreateAPIView):
    queryset = models.productionPlanning.objects.order_by('-id')
    serializer_class = serializers.productionPlanningSerializer
    pagination_class = defaultPagination

class MostOrderedProducts(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        total_rows = models.productionPlanning.objects.count()
        product_counts = models.productionPlanning.objects.values('product_id').annotate(count=Count('product_id'))
        most_ordered_products = []

        for entry in product_counts:
            product_id = entry['product_id']
            count = entry['count']
            percentage = (count / total_rows) * 100

            most_ordered_products.append({
                'product_id': product_id,
                'category': product_id,
                'percentage': percentage
            })

        return Response({'most_ordered_products': most_ordered_products})
    
class recentOrders(generics.ListAPIView):
    queryset = models.productionPlanning.objects.order_by('-id')
    serializer_class = serializers.recentOrdersSerializer
    pagination_class = defaultPagination

class productionPlanningEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.productionPlanning.objects.all()
    serializer_class = serializers.productionPlanningSerializer
    lookup_url_kwarg = "id"

class lineMachineConfigList(generics.ListCreateAPIView):
    queryset = models.lineMachineConfig.objects.order_by('-id')
    serializer_class = serializers.lineMachineConfigSerializer
    pagination_class = defaultPagination

class lineMachineConfigEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.lineMachineConfig.objects.all()
    serializer_class = serializers.lineMachineConfigSerializer
    lookup_url_kwarg = "id"



# Database Connection Check Function
def check_database_connection(request):
    try:
        with connection.cursor():
            # Try to execute a simple query to check the database connection
            pass
        return JsonResponse({'message': 'Database Connected.'})
    except OperationalError as e:
        # Handle the database connection error
        error_message = str(e)
        return JsonResponse({'error': 'Database connection error', 'message': error_message}, status=500)
    


# Open Jobworks from Production Planning
class openJobWorks(generics.ListCreateAPIView):
    # queryset = models.productionPlanning.objects.raw('SELECT id, job_id FROM production_planning WHERE planned_date IS NULL ORDER BY id ASC').no_cache()
    queryset = models.productionPlanning.objects.filter(planned_date__isnull=True).order_by('id')
    serializer_class = serializers.openJobWorkSerializer

class productionPlanById(generics.ListCreateAPIView):
    queryset = models.productionPlanning.objects.all()
    serializer_class = serializers.productionPlanningSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'job_id']
    

# class LineMachineSlotConfigViewSet(viewsets.ModelViewSet):
#     queryset = models.lineMachineSlotConfig.objects.all()
#     serializer_class = serializers.lineMachineSlotConfigSerializer

#     @action(detail=False, methods=['POST'])
#     def calculate_schedule(self, request):
#         # Get input data from the request
#         product_id = request.data.get('product_id')
#         quantity = request.data.get('quantity')
#         start_date = datetime.strptime(request.data.get('start_date'), '%Y-%m-%d')
        
#         # Define the product target (60 seconds per unit)
#         product_target = 60  # seconds
        
#         # Calculate total hours required to produce the quantity
#         total_seconds_required = quantity * product_target
#         total_hours_required = total_seconds_required / 3600  # 1 hour = 3600 seconds

#         # Calculate the number of days required
#         days_required = total_hours_required / 21  # Assuming 21 hours per day

#         # Initialize the current date and remaining hours
#         current_date = start_date
#         remaining_hours = total_hours_required
#         planned_production = 0

#         while remaining_hours > 0:
#             # Calculate planned production for the day
#             planned_production = min(21, remaining_hours)
            
#             # Create a LineMachineSlotConfig object and save it to the database
#             line_config = models.lineMachineSlotConfig(
#                 product_id=product_id,
#                 date=current_date,
#                 planned_hours=planned_production,
#                 remaining_hours=remaining_hours - planned_production,
#                 balance_production=quantity - planned_production,
#                 shift_a=f'Shift A {planned_production}',
#                 shift_b=f'Shift B {planned_production}',
#                 shift_c=f'Shift C {planned_production}',
#             )
#             line_config.save()
            
#             # Update current date and remaining hours for the next iteration
#             current_date += timedelta(days=1)
#             remaining_hours -= planned_production

#         return Response({'message': 'Schedule calculated and saved.'})





'''Data Processing without consideration of start date and start time'''
class LineMachineSlotConfigViewSet(viewsets.ModelViewSet):
    queryset = models.lineMachineSlotConfig.objects.all()
    serializer_class = serializers.lineMachineSlotConfigSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'job_id']

    @action(detail=False, methods=['POST'])
    def calculate_schedule(self, request):
        # Deserialize input data
        input_serializer = serializers.ScheduleInputSerializer(data=request.data)
        if input_serializer.is_valid():
            product_id = input_serializer.validated_data['product_id']
            quantity = input_serializer.validated_data['quantity']
            start_date = input_serializer.validated_data['start_date']
            job_id = input_serializer.validated_data['job_id']
            company = input_serializer.validated_data['company']
            plant = input_serializer.validated_data['plant']
            shopfloor = input_serializer.validated_data['shopfloor']
            assembly_line = input_serializer.validated_data['assembly_line']
            machine_id = input_serializer.validated_data['machine_id']
            # start_shift = input_serializer.validated_data['start_shift']
            # start_time_str = input_serializer.validated_data['start_time']
            # # Convert start_time from string to datetime
            # start_time = datetime.strptime(start_time_str, '%H:%M')
        else:
            return Response(input_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


        try:
            product_recipe = models.productionPlanning.objects.get(job_id=job_id)
            product_target = product_recipe.product_target
        except models.productionPlanning.DoesNotExist:
            product_target = None

        if product_target:
            product_target_seconds = product_target.total_seconds()
        else:
            # Set a default value or raise an exception as needed
            product_target_seconds = 0


        # Define the product target (60 seconds per unit)
        product_target = product_target_seconds  # seconds

        # Calculate total hours required to produce the quantity
        total_seconds_required = quantity * product_target
        total_hours_required = round(total_seconds_required / 3600, 2)  # 1 hour = 3600 seconds

        # Calculate the number of days required
        days_required = total_hours_required / 22  # Assuming 21 hours per day

        # Initialize the current date and remaining hours
        current_date = start_date
        remaining_hours = total_hours_required
        planned_hours = 0
        total_planned_production = 0
        balance_production = quantity

        while remaining_hours > 0:
            # Calculate planned production for the day
            planned_hours = min(22, remaining_hours)
            

            planned_production = planned_hours * (3600 / product_target)
            # Calculate balance production decrementally

            total_planned_production += planned_production

            balance_production = quantity - total_planned_production
            

            # Create a LineMachineSlotConfig object and save it to the database
            line_config = models.lineMachineSlotConfig(
                product_id=product_id,
                date=current_date,
                planned_hours=planned_hours,
                planned_production=planned_production,  # Planned production in units
                remaining_hours=remaining_hours - planned_hours,
                balance_production=balance_production,  # Balance production in units
                shift_a=f'08 - 20 ({planned_hours})',
                shift_b=f'20 - 08 ({planned_hours})',
                # shift_c=f'22 - 06 ({planned_hours})',
                shift_c= None,
                job_id=job_id,
                company=company,
                plant=plant,
                shopfloor=shopfloor,
                assembly_line=assembly_line,
                machine_id=machine_id,
            )
            line_config.save()

            # Update current date and remaining hours for the next iteration
            current_date += timedelta(days=1)
            remaining_hours -= planned_hours

        return Response({'message': 'Schedule calculated and saved.'}, status=status.HTTP_201_CREATED)
    

    @action(detail=False, methods=['GET'])
    def get_schedule(self, request):
        # Add your code for handling GET requests here
        # For example, you can retrieve and return schedule data
        schedules = models.lineMachineSlotConfig.objects.all()
        serializer = serializers.lineMachineSlotConfigSerializer(schedules, many=True)
        return Response(serializer.data)



'''Improper implementation of start shift and start time'''
# class LineMachineSlotConfigViewSet(viewsets.ModelViewSet):
#     queryset = models.lineMachineSlotConfig.objects.all()
#     serializer_class = serializers.lineMachineSlotConfigSerializer
#     filter_backends = [DjangoFilterBackend]
#     filterset_fields = ['id', 'job_id']

#     @action(detail=False, methods=['POST'])
#     def calculate_schedule(self, request):
#         # Deserialize input data
#         input_serializer = serializers.ScheduleInputSerializer(data=request.data)
#         if input_serializer.is_valid():
#             product_id = input_serializer.validated_data['product_id']
#             quantity = input_serializer.validated_data['quantity']
#             start_date = input_serializer.validated_data['start_date']
#             job_id = input_serializer.validated_data['job_id']
#             company = input_serializer.validated_data['company']
#             plant = input_serializer.validated_data['plant']
#             shopfloor = input_serializer.validated_data['shopfloor']
#             assembly_line = input_serializer.validated_data['assembly_line']
#             machine_id = input_serializer.validated_data['machine_id']
#             start_shift = input_serializer.validated_data['start_shift']
#             start_time_str = input_serializer.validated_data['start_time']
#             # Convert start_time from string to datetime
#             start_time = datetime.strptime(start_time_str, '%H:%M')
#         else:
#             return Response(input_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#         # Define the product target (60 seconds per unit)
#         product_target = 60  # seconds

#         # Calculate total hours required to produce the quantity
#         total_seconds_required = quantity * product_target
#         total_hours_required = total_seconds_required / 3600  # 1 hour = 3600 seconds

#         # Calculate the number of days required
#         days_required = total_hours_required / 21  # Assuming 21 hours per day

#         # Initialize the current date and remaining hours
#         current_date = start_date
#         remaining_hours = total_hours_required
#         planned_hours = 0
#         total_planned_production = 0
#         balance_production = quantity

#         while remaining_hours > 0:
#             # Determine the shift based on start_shift and time
#             if start_shift == 'FS':
#                 shift = f'06 - 14'
#                 planned_hours = min(14 - start_time.hour, remaining_hours)
#             elif start_shift == 'SS':
#                 shift = f'14 - 22'
#                 planned_hours = min(22 - start_time.hour, remaining_hours)
#             elif start_shift == 'NS':
#                 shift = f'22 - 06'
#                 planned_hours = min(6 - start_time.hour, remaining_hours)
#             else:
#                 # Handle an invalid shift
#                 return Response({'error': 'Invalid shift specified.'}, status=status.HTTP_400_BAD_REQUEST)
            
#             # Calculate planned production for the day
#             # planned_hours = min(21, remaining_hours)
            

#             planned_production = planned_hours * (3600 / product_target)
#             # Calculate balance production decrementally

#             total_planned_production += planned_production

#             balance_production = quantity - total_planned_production
            

#              # Create a LineMachineSlotConfig object and save it to the database
#             line_config = models.lineMachineSlotConfig(
#                 product_id=product_id,
#                 date=current_date,
#                 planned_hours=planned_hours,
#                 planned_production=planned_production,
#                 remaining_hours=remaining_hours - planned_hours,
#                 balance_production=balance_production,
#                 shift_a=f'06 - 14 ({planned_hours})',
#                 shift_b=f'14 - 22 ({planned_hours})',
#                 shift_c=f'22 - 06 ({planned_hours})',
#                 job_id=job_id,
#                 company=company,
#                 plant=plant,
#                 shopfloor=shopfloor,
#                 assembly_line=assembly_line,
#                 machine_id=machine_id,
#             )
#             line_config.save()

#             # Update current date and remaining hours for the next iteration
#             current_date += timedelta(days=1)
#             remaining_hours -= planned_hours

#         return Response({'message': 'Schedule calculated and saved.'}, status=status.HTTP_201_CREATED)
    

#     @action(detail=False, methods=['GET'])
#     def get_schedule(self, request):
#         # Add your code for handling GET requests here
#         # For example, you can retrieve and return schedule data
#         schedules = models.lineMachineSlotConfig.objects.all()
#         serializer = serializers.lineMachineSlotConfigSerializer(schedules, many=True)
#         return Response(serializer.data)




'''Third Iteration of Data Processing
    Failed attempt to implement start shift and start time'''
# class LineMachineSlotConfigViewSet(viewsets.ModelViewSet):
#     queryset = models.lineMachineSlotConfig.objects.all()
#     serializer_class = serializers.lineMachineSlotConfigSerializer
#     filter_backends = [DjangoFilterBackend]
#     filterset_fields = ['id', 'job_id']

#     @action(detail=False, methods=['POST'])
#     def calculate_schedule(self, request):
#         # Deserialize input data
#         input_serializer = serializers.ScheduleInputSerializer(data=request.data)
#         if input_serializer.is_valid():
#             product_id = input_serializer.validated_data['product_id']
#             quantity = input_serializer.validated_data['quantity']
#             start_date = input_serializer.validated_data['start_date']
#             job_id = input_serializer.validated_data['job_id']
#             company = input_serializer.validated_data['company']
#             plant = input_serializer.validated_data['plant']
#             shopfloor = input_serializer.validated_data['shopfloor']
#             assembly_line = input_serializer.validated_data['assembly_line']
#             machine_id = input_serializer.validated_data['machine_id']
#             start_shift_code = input_serializer.validated_data['start_shift']
#             start_time_str = input_serializer.validated_data['start_time']
#             # Convert start_time from string to datetime
#             start_time = datetime.strptime(start_time_str, '%H:%M')
#         else:
#             return Response(input_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#         # Define the product target (60 seconds per unit)
#         product_target = 60  # seconds

#         # Calculate total hours required to produce the quantity
#         total_seconds_required = quantity * product_target
#         total_hours_required = total_seconds_required / 3600  # 1 hour = 3600 seconds

#         # Calculate the number of days required
#         days_required = total_hours_required / 21  # Assuming 21 hours per day

#         # Initialize the current date and remaining hours
#         current_date = start_date
#         remaining_hours = total_hours_required
#         planned_hours = 0
#         total_planned_production = 0
#         balance_production = quantity

#         # Assign start_shift and start_time based on input values
#         shift_hours = {'SS': 6, 'FS': 8, 'TS': 10}
#         start_shift_hours = shift_hours[start_shift_code]
#         start_shift = start_shift_code
#         start_shift_time = datetime.strptime(f'{start_shift_hours}:00', '%H:%M')
#         if start_time < start_shift_time:
#             start_time = start_shift_time

#         while remaining_hours > 0:
#             # Calculate planned production for the day
#             planned_hours = min(21, remaining_hours)

#             planned_production = planned_hours * (3600 / product_target)
#             # Calculate balance production decrementally

#             total_planned_production += planned_production

#             balance_production = quantity - total_planned_production

#             # Create a LineMachineSlotConfig object and save it to the database
#             line_config = models.lineMachineSlotConfig(
#                 product_id=product_id,
#                 date=current_date,
#                 planned_hours=planned_hours,
#                 planned_production=planned_production,  # Planned production in units
#                 remaining_hours=remaining_hours - planned_hours,
#                 balance_production=balance_production,  # Balance production in units
#                 shift_a=f'{start_shift} - {start_shift_hours + 6} ({planned_hours})',
#                 shift_b=f'{start_shift_hours + 6} - {start_shift_hours + 14} ({planned_hours})',
#                 shift_c=f'{start_shift_hours + 14} - {start_shift_hours + 24} ({planned_hours})',
#                 job_id=job_id,
#                 company=company,
#                 plant=plant,
#                 shopfloor=shopfloor,
#                 assembly_line=assembly_line,
#                 machine_id=machine_id,
#             )
#             line_config.save()

#             # Update current date and remaining hours for the next iteration
#             current_date += timedelta(days=1)
#             remaining_hours -= planned_hours

#             # Update start_shift and start_time for the next iteration
#             start_shift_hours += 24
#             if start_shift_hours >= 24:
#                 start_shift_hours -= 24
#             start_shift = {'SS': 'FS', 'FS': 'TS', 'TS': 'SS'}[start_shift]
#             start_time = datetime.strptime(f'{start_shift_hours:02d}:{start_time.minute:02d}', '%H:%M')

#         return Response({'message': 'Schedule calculated and saved.'}, status=status.HTTP_201_CREATED)




'''Get View for machineWiseDate Model'''
# class machineWiseDataView(generics.ListCreateAPIView):
#     queryset = models.machineWiseData.objects.order_by("time")
#     serializer_class = serializers.machineWiseDataSerializer
#     filter_backends = [DjangoFilterBackend]
#     filterset_fields = ['id', 'date', 'time', 'machine_id', 'product_target']

'''Get View for machinewise group by machine id'''
class machineWiseDataView(generics.ListAPIView):
    queryset = models.machineWiseData.objects.all()
    serializer_class = serializers.machineWiseDataSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'date', 'time', 'machine_id', 'product_target']
    # paginate_by = None  # To disable pagination


'''Update View for machineWiseDate Model'''
class machineWiseDataUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.machineWiseData.objects.all()
    serializer_class = serializers.machineWiseDataUpdateSerializer
    lookup_url_kwarg = "id" 