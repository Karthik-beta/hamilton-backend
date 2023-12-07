from django.shortcuts import render
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination

from report import models
from report import serializers




class defaultPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class productionReportList(generics.ListCreateAPIView):
    queryset = models.productionReport.objects.order_by('-id')
    serializer_class = serializers.productionReportSerializer
    pagination_class = defaultPagination