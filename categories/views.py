from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from categories.serializers import LaptopSerializer, MouseSerializer, MonitorSerializer
from categories.models import Laptop, Monitor, Mouse


def index(request):
    return HttpResponse('Hi')


@api_view(['GET'])
def laptopList(request):
    laptops = Laptop.objects.all()
    serializer = LaptopSerializer(laptops, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def mouseList(request):
    mouses = Mouse.objects.all()
    serializer = MouseSerializer(mouses, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def laptopDetails(request, name):
    laptops = Laptop.objects.get(name=str(name).replace('+', ' '))
    serializer = LaptopSerializer(laptops, many=False)

    return Response(serializer.data)


@api_view(['GET'])
def laptopSearch(request, name):
    laptops = Laptop.objects.filter(name__contains=str(name).replace('+', ' '))
    serializer = LaptopSerializer(laptops, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def deviceList(request):
    data = []
    laptops = Laptop.objects.all()
    mouses = Mouse.objects.all()
    monitors = Monitor.objects.all()
    laptops_serializer = LaptopSerializer(laptops, many=True)
    mouses_serializer = MouseSerializer(mouses, many=True)
    monitors_serializer = MonitorSerializer(monitors, many=True)

    for element in laptops_serializer.data:
        data.append(element)

    for element in mouses_serializer.data:
        data.append(element)

    for element in monitors_serializer.data:
        data.append(element)

    return Response(data)


@api_view(['GET'])
def mouseSearch(request, name):
    mouses = Mouse.objects.filter(name__contains=str(name).replace('+', ' '))
    serializer = MouseSerializer(mouses, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def deviceSearch(request, name):
    data = []
    laptops = Laptop.objects.filter(name__contains=str(name).replace('+', ' '))
    mouses = Mouse.objects.filter(name__contains=str(name).replace('+', ' '))
    monitors = Monitor.objects.filter(
        name__contains=str(name).replace('+', ' '))
    laptops_serializer = LaptopSerializer(laptops, many=True)
    mouses_serializer = MouseSerializer(mouses, many=True)
    monitors_serializer = MonitorSerializer(monitors, many=True)

    for element in laptops_serializer.data:
        data.append(element)

    for element in mouses_serializer.data:
        data.append(element)

    for element in monitors_serializer.data:
        data.append(element)

    return Response(data)
