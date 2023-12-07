from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination



from config import models
from config import serializers



class productList(generics.ListCreateAPIView):
    queryset = models.Products.objects.order_by('id')
    serializer_class = serializers.ProductsSerializer
    

class productEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductsSerializer
    lookup_url_kwarg = "id"


class companyList(generics.ListCreateAPIView):
    queryset = models.company.objects.order_by('id')
    serializer_class = serializers.companySerializer


class companyEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.company.objects.all()
    serializer_class = serializers.companySerializer
    lookup_url_kwarg = "id"


class plantList(generics.ListCreateAPIView):
    queryset = models.plant.objects.order_by('id')
    serializer_class = serializers.plantSerializer


class plantEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.plant.objects.all()
    serializer_class = serializers.plantSerializer
    lookup_url_kwarg = "id"


class shopfloorList(generics.ListCreateAPIView):
    queryset = models.shopfloor.objects.order_by('id')
    serializer_class = serializers.shopfloorSerializer


class shopfloorEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.shopfloor.objects.all()
    serializer_class = serializers.shopfloorSerializer
    lookup_url_kwarg = "id"


class assemblylineList(generics.ListCreateAPIView):
    queryset = models.assemblyline.objects.order_by('id')
    serializer_class = serializers.assemblylineSerializer


class assemblylineEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.assemblyline.objects.all()
    serializer_class = serializers.assemblylineSerializer
    lookup_url_kwarg = "id"


class machineList(generics.ListCreateAPIView):
    queryset = models.machine.objects.order_by('id')
    serializer_class = serializers.machineSerializer

class machineEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.machine.objects.all()
    serializer_class = serializers.machineSerializer
    lookup_url_kwarg = "id"

class batchList(generics.ListCreateAPIView):
    queryset = models.batch.objects.order_by('id')
    serializer_class = serializers.batchSerializer

class batchEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.batch.objects.all()
    serializer_class = serializers.batchSerializer
    lookup_url_kwarg = "id"

class poNoList(generics.ListCreateAPIView):
    queryset = models.poNo.objects.order_by('id')
    serializer_class = serializers.poNoSerializer

class poNoEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.poNo.objects.all()
    serializer_class = serializers.poNoSerializer
    lookup_url_kwarg = "id"

class productReceipeList(generics.ListCreateAPIView):
    queryset = models.productReceipe.objects.order_by('id')
    serializer_class = serializers.productReceipeSerializer

class productReceipeEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.productReceipe.objects.all()
    serializer_class = serializers.productReceipePostSerializer
    lookup_url_kwarg = "id"

class attendanceRulesList(generics.ListCreateAPIView):
    queryset = models.attendanceRules.objects.order_by('id')
    serializer_class = serializers.attendanceRulesSerializer

class attendanceRulesEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.attendanceRules.objects.all()
    serializer_class = serializers.attendanceRulesSerializer
    lookup_url_kwarg = "id"