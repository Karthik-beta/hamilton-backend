from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from .models import lineMachineSlotConfig, lineMachineConfig, productionPlanning
from django.utils import timezone
from datetime import datetime
from django.db.models import F
from django.dispatch import receiver
from config.models import productReceipe
from production.serializers import ScheduleInputSerializer


'''copying data from lineMachineSlotConfig to lineMachineConfig'''
@receiver(post_save, sender=lineMachineSlotConfig)
def copy_data_to_line_machine_config(sender, instance, created, **kwargs):
    if created:
        # Check if a lineMachineConfig entry with the same job_id already exists
        existing_entry = lineMachineConfig.objects.filter(job_id=instance.job_id).first()

        if not existing_entry:
            # If no existing entry with the same job_id, create a new one
            lineMachineConfig.objects.create(
                job_id=instance.job_id,
                company=instance.company,
                plant=instance.plant,
                shopfloor=instance.shopfloor,
                product_id=instance.product_id,
                assembly_line=instance.assembly_line,
                machine_id=instance.machine_id,
                total_order=instance.planned_production,
                required_time=instance.planned_hours,
                manager=instance.manager
            )


'''copying data from lineMachineConfig to productionPlanning with assigned start production'''
@receiver(post_save, sender=lineMachineSlotConfig)
def copy_data_to_line_machine_config(sender, instance, created, **kwargs):
    if created:
        # Find the first non-null value among "shift_a," "shift_b," and "shift_c"
        first_non_null_shift = None
        for shift_field in ["shift_a", "shift_b", "shift_c"]:
            shift_value = getattr(instance, shift_field)
            if shift_value is not None:
                first_non_null_shift = shift_value
                break

        if first_non_null_shift is not None:
            # Check if a lineMachineConfig entry with the same job_id already exists
            existing_entry = lineMachineConfig.objects.filter(job_id=instance.job_id).first()

            if not existing_entry:
                # If no existing entry with the same job_id, create a new one
                lineMachineConfig.objects.create(
                    job_id=instance.job_id,
                    company=instance.company,
                    plant=instance.plant,
                    shopfloor=instance.shopfloor,
                    product_id=instance.product_id,
                    assembly_line=instance.assembly_line,
                    machine_id=instance.machine_id,
                    total_order=instance.planned_production,
                    required_time=instance.planned_hours,
                    manager=instance.manager,
                    assigned_start_production=first_non_null_shift  # Assign the value
                )
            else:
                # Update the existing entry with the first non-null shift value
                existing_entry.assigned_start_production = first_non_null_shift
                existing_entry.save()


'''copying data from lineMachineConfig to productionPlanning with assigned end production'''
# def copy_data_to_line_machine_config(sender, instance, created, **kwargs):
#     # Find all lineMachineConfig entries with the same job_id
#     matching_entries = lineMachineConfig.objects.filter(job_id=instance.job_id)

#     if matching_entries.exists():
#         # Find the first non-null value among "shift_a," "shift_b," and "shift_c"
#         first_non_null_shift = None
#         for shift_field in ["shift_a", "shift_b", "shift_c"]:
#             shift_value = getattr(instance, shift_field)
#             if shift_value is not None:
#                 first_non_null_shift = shift_value
#                 break

#         # Find the last non-null value among "shift_a," "shift_b," and "shift_c"
#         last_non_null_shift = None
#         for shift_field in reversed(["shift_a", "shift_b", "shift_c"]):
#             shift_value = getattr(instance, shift_field)
#             if shift_value is not None:
#                 last_non_null_shift = shift_value
#                 break

        

#             if not existing_entry:
#                 # If no existing entry with the same job_id, create a new one
#                 lineMachineConfig.objects.create(
#                     job_id=instance.job_id,
#                     company=instance.company,
#                     plant=instance.plant,
#                     shopfloor=instance.shopfloor,
#                     product_id=instance.product_id,
#                     assembly_line=instance.assembly_line,
#                     machine_id=instance.machine_id,
#                     total_order=instance.planned_production,
#                     required_time=instance.planned_hours,
#                     manager=instance.manager,
#                     assigned_start_production=first_non_null_shift  # Assign the value
#                 )
#             else:
#                # Update the "assigned_start_production" and "assigned_end_production" fields
#                 if first_non_null_shift is not None:
#                     matching_entries.update(assigned_start_production=first_non_null_shift)
#                 if last_non_null_shift is not None:
#                     matching_entries.update(assigned_end_production=last_non_null_shift)



# @receiver(post_save, sender=lineMachineConfig)
# def update_planned_date(sender, instance, created, **kwargs):
#     print("Signal handler is executed.")
#     if created:
#         print(f"Signal handler triggered for job_id: {instance.job_id}")
#         try:
#             production_plan = productionPlanning.objects.get(job_id=instance.job_id)
#             print(f"Found matching production plan with job_id: {production_plan.job_id}")
#             production_plan.planned_date = datetime.now().date()
#             production_plan.save()
#         except productionPlanning.DoesNotExist:
#             # Handle the case where no matching production planning instance is found.
#             print(f"Error: No matching production planning instance found for job_id {instance.job_id}")




'''Update planned date field succesfully working'''
@receiver(post_save, sender=lineMachineConfig)
def update_planned_date(sender, instance, created, **kwargs):
    print("Signal handler is executed.")
    if created:
        print(f"Signal handler triggered for job_id: {instance.job_id}")
        try:
            productionPlanning.objects.filter(job_id=instance.job_id).update(planned_date=datetime.now().date())
            print(f"Updated planned_date for job_id: {instance.job_id}")
        except productionPlanning.DoesNotExist:
            # Handle the case where no matching production planning instance is found.
            print(f"Error: No matching production planning instance found for job_id {instance.job_id}")



'''Update planned date field succesfully working with serializer data'''
# @receiver(post_save, sender=lineMachineConfig)
# def update_start_date(sender, instance, created, **kwargs):
#     print("Signal handler is executed.")
#     if created:
#         print(f"Signal handler triggered for job_id: {instance.job_id}")
#         try:
#             # Deserialize the input data using the ScheduleInputSerializer
#             input_data = {
#                 "job_id": instance.job_id,
#                 # "company": instance.company,
#                 # "plant": instance.plant,
#                 # "shopfloor": instance.shopfloor,
#                 # "assembly_line": instance.assembly_line,
#                 # "machine_id": instance.machine_id,
#                 # "product_id": instance.product_id,
#                 # "quantity": instance.quantity,
#                 "start_date": instance.start_date  # Use the 'start_date' from the input
#             }
#             serializer = ScheduleInputSerializer(data=input_data)

#             if serializer.is_valid():
#                 # Extract the 'start_date' from the input data and update the 'start_date' field in productionPlanning
#                 start_date = serializer.validated_data['start_date']
#                 production_planning = productionPlanning.objects.get(job_id=instance.job_id)
#                 production_planning.planned_date = start_date
#                 production_planning.save()
#                 print(f"Updated start_date for job_id: {instance.job_id}")
#             else:
#                 print("Error: Input data is invalid.")
#         except productionPlanning.DoesNotExist:
#             # Handle the case where no matching production planning instance is found.
#             print(f"Error: No matching production planning instance found for job_id {instance.job_id}")

