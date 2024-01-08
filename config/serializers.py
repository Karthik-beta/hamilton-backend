from rest_framework import serializers
from config import models


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Products
        fields = '__all__'

class companySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.company
        fields = '__all__'

class plantSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.plant
        fields = '__all__'

class shopfloorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.shopfloor
        fields = '__all__'

class assemblylineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.assemblyline
        fields = '__all__'

class machineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.machine
        fields = '__all__'

class batchSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.batch
        fields = '__all__'

class poNoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.poNo
        fields = '__all__'

class productReceipePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRecipe2
        # fields = ['id', 'product_Name', 'stages', 'target_per_unit', 'skill_matrix']
        fields = '__all__'

class productReceipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRecipe2
        fields = '__all__'

class attendanceRulesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.attendanceRules
        fields = '__all__'


class departmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.department
        fields = '__all__'


class designationSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.designation
        fields = '__all__'