from django.http import HttpResponse
from rest_framework import serializers
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from categories.serializers import LaptopSerializer, MouseSerializer, MonitorSerializer, ProductSerializer
from categories.models import Laptop, Monitor, Mouse, Product, Enter, Darwin


# @api_view(['GET'])
# def productsList(request):
#     data = []

#     products = Product.objects.all()

#     products_serializer = ProductSerializer(products, many=True)

#     for product in products_serializer.data:
#         obj = {}

#         if product['category'] == 'Laptops':
#             laptop = LaptopCategory.objects.get(product_id=product['id'])
#             laptop_serializer = LaptopCategorySerializer(laptop)
#             obj.update(product)
#             obj.update(laptop_serializer.data)
#             data.append(obj)
#         elif product['category'] == 'Monitors':
#             monitor = MonitorCategory.objects.get(product_id=product['id'])
#             monitor_serializer = MonitorCategorySerializer(monitor)
#             obj.update(product)
#             obj.update(monitor_serializer.data)
#             data.append(obj)
#         else:
#             mouse = MouseCategory.objects.get(product_id=product['id'])
#             mouse_serializer = MouseCategorySerializer(mouse)
#             obj.update(product)
#             obj.update(mouse_serializer.data)
#             data.append(obj)

#     return Response(data)

@api_view(['GET'])
def productList(request):
    products = Product.objects.all()
    products_serializer = ProductSerializer(products, many=True)

    return Response(products_serializer.data)


@api_view(['GET'])
def popularProductsList(request):
    products = Product.objects.all().order_by('-views')
    products_serializer = ProductSerializer(products, many=True)

    return Response(products_serializer.data[:5])


@api_view(['GET'])
def productDetails(request, device):
    product = Product.objects.get(name__iexact=device)
    product_serializer = ProductSerializer(product, many=False)

    obj = {}

    if product_serializer.data['category'] == 'Laptops':
        laptop = Laptop.objects.get(
            product__name__iexact=device)
        laptop_serializer = LaptopSerializer(laptop)
        obj.update(product_serializer.data)
        obj.update(laptop_serializer.data)
    elif product_serializer.data['category'] == 'Monitors':
        monitor = Monitor.objects.get(
            product__name__iexact=device)
        monitor_serializer = MonitorSerializer(monitor)
        obj.update(product_serializer.data)
        obj.update(monitor_serializer.data)
    else:
        mouse = Mouse.objects.get(
            product__name__iexact=device)
        mouse_serializer = MouseSerializer(mouse)
        obj.update(product_serializer.data)
        obj.update(mouse_serializer.data)

    return Response(obj)


@api_view(['GET'])
def productSearch(request, device):
    products = Product.objects.filter(name__icontains=device)
    products_serializer = ProductSerializer(products, many=True)

    return Response(products_serializer.data)


@api_view(['PUT'])
def productCreate(request):
    for i in range(0, len(request.data)):
        data = dict(list(request.data[i].items())[:6])
        shops = request.data[i]['shops']
        product = Product.objects.create(**data)
        product.save()

        if (data['category'] == 'Laptops'):
            device_data = dict(list(request.data[i].items())[6:16])
            laptop = Laptop.objects.create(
                product=product, **device_data)
            laptop.save()
        elif (data['category'] == 'Monitors'):
            device_data = dict(list(request.data[i].items())[6:10])
            monitor = Monitor.objects.create(
                product=product, **device_data)
            monitor.save()
        else:
            device_data = dict(list(request.data[i].items())[6:10])
            mouse = Mouse.objects.create(
                product=product, **device_data)
            mouse.save()

        for shop in shops:
            if shop['name'] == 'Darwin':
                shop_data = dict(list(shop.items())[1:4])
                darwin = Darwin.objects.create(
                    product=product, **shop_data)
                darwin.save()
            elif shop['name'] == 'Enter':
                shop_data = dict(list(shop.items())[1:4])
                enter = Enter.objects.create(
                    product=product, **shop_data)
                enter.save()

    return Response(request.data)


@api_view(['GET'])
def laptopList(request):
    data = []

    product = Product.objects.filter(category='Laptops')
    product_serializer = ProductSerializer(product, many=True)
    laptop = Laptop.objects.all()
    laptop_serializer = LaptopSerializer(laptop, many=True)

    for i in range(0, len(product_serializer.data)):
        data.append(
            {**product_serializer.data[i], **laptop_serializer.data[i]})

    return Response(data)


@api_view(['GET'])
def laptopDetails(request, device):
    product = Product.objects.get(name__iexact=device)
    product_serializer = ProductSerializer(product)
    laptop = Laptop.objects.get(
        product__name__iexact=device)
    laptop_serializer = LaptopSerializer(laptop)

    obj = {**product_serializer.data, **laptop_serializer.data}

    return Response(obj)


@api_view(['GET'])
def mouseList(request):
    data = []

    product = Product.objects.filter(category='Mouses')
    product_serializer = ProductSerializer(product, many=True)
    mouse = Mouse.objects.all()
    mouse_serializer = MouseSerializer(mouse, many=True)

    for i in range(0, len(product_serializer.data)):
        data.append(
            {**product_serializer.data[i], **mouse_serializer.data[i]})

    return Response(data)


@api_view(['GET'])
def mouseDetails(request, device):
    product = Product.objects.get(name__iexact=device)
    product_serializer = ProductSerializer(product)
    mouse = Mouse.objects.get(
        product__name__iexact=device)
    mouse_serializer = MouseSerializer(mouse)

    obj = {**product_serializer.data, **mouse_serializer.data}

    return Response(obj)


@api_view(['GET'])
def monitorList(request):
    data = []

    product = Product.objects.filter(category='Monitors')
    product_serializer = ProductSerializer(product, many=True)
    monitor = Monitor.objects.all()
    monitor_serializer = MonitorSerializer(monitor, many=True)

    for i in range(0, len(product_serializer.data)):
        data.append(
            {**product_serializer.data[i], **monitor_serializer.data[i]})

    return Response(data)


@api_view(['GET'])
def monitorDetails(request, device):
    product = Product.objects.get(name__iexact=device)
    product_serializer = ProductSerializer(product)
    monitor = Monitor.objects.get(
        product__name__iexact=device)
    monitor_serializer = MonitorSerializer(monitor)

    obj = {**product_serializer.data, **monitor_serializer.data}

    return Response(obj)
