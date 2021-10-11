from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from categories.serializers import LaptopSerializer
from categories.models import Laptop


def index(request):
    return HttpResponse('Hi')


@api_view(['GET'])
def laptopList(request):
    laptops = Laptop.objects.all()
    serializer = LaptopSerializer(laptops, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def laptopDetails(request, name):
    laptops = Laptop.objects.get(name=str(name).replace('+', ' '))
    serializer = LaptopSerializer(laptops, many=False)

    return Response(serializer.data)
