from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from categories import serializers
from categories import models


@api_view(['GET'])
def productList(request):
    products = models.Product.objects.all()
    products_serializer = serializers.ProductSerializer(products, many=True)

    return Response(products_serializer.data)


@api_view(['GET'])
def popularProductsList(request):
    products = models.Product.objects.all().order_by('-views')
    products_serializer = serializers.ProductSerializer(products, many=True)

    return Response(products_serializer.data[:5])


@api_view(['GET'])
def productDetails(request, device):
    product = models.Product.objects.get(name__iexact=device)  # pun try except
    product_serializer = serializers.ProductSerializer(product, many=False)
    shops = models.Shops.objects.get(product__name__iexact=device)
    shops_serializer = serializers.ShopsSerializer(shops, many=False)

    obj = {}

    if product_serializer.data['category'] == 'Laptops':
        laptop = models.Laptop.objects.get(
            product__name__iexact=device)
        laptop_serializer = serializers.LaptopSerializer(laptop)
        obj.update(product_serializer.data)
        obj.update(laptop_serializer.data)
        obj.update(shops_serializer.data)
    elif product_serializer.data['category'] == 'Monitors':
        monitor = models.Monitor.objects.get(
            product__name__iexact=device)
        monitor_serializer = serializers.MonitorSerializer(monitor)
        obj.update(product_serializer.data)
        obj.update(monitor_serializer.data)
        obj.update(shops_serializer.data)
    else:
        mouse = models.Mouse.objects.get(
            product__name__iexact=device)
        mouse_serializer = serializers.MouseSerializer(mouse)
        obj.update(product_serializer.data)
        obj.update(mouse_serializer.data)
        obj.update(shops_serializer.data)

    return Response(obj)  # return status


@api_view(['GET'])
def productSearch(request, device):
    products = models.Product.objects.filter(name__icontains=device)
    products_serializer = serializers.ProductSerializer(products, many=True)

    return Response(products_serializer.data)


@api_view(['POST'])
def productCreate(request):
    for i in range(0, len(request.data)):
        data = dict(list(request.data[i].items())[:6])
        print(data)
        shops = request.data[i]['shops']
        product = models.Product.objects.create(**data)
        product.save()

        if (data['category'] == 'Laptops'):
            device_data = dict(list(request.data[i].items())[6:16])
            laptop = models.Laptop.objects.create(
                product=product, **device_data)
            laptop.save()
        elif (data['category'] == 'Monitors'):
            device_data = dict(list(request.data[i].items())[6:10])
            monitor = models.Monitor.objects.create(
                product=product, **device_data)
            monitor.save()
        else:
            device_data = dict(list(request.data[i].items())[6:10])
            mouse = models.Mouse.objects.create(
                product=product, **device_data)
            mouse.save()

        shops_data = models.Shops.objects.create(
            product=product, **shops
        )
        shops_data.save()

    return Response(data)


@api_view(['GET'])
def laptopList(request):
    data = []

    product = models.Product.objects.filter(category='Laptops')
    product_serializer = serializers.ProductSerializer(product, many=True)
    laptop = models.Laptop.objects.all()
    laptop_serializer = serializers.LaptopSerializer(laptop, many=True)

    for i in range(0, len(product_serializer.data)):
        data.append(
            {**product_serializer.data[i], **laptop_serializer.data[i]})

    return Response(data)


@api_view(['GET'])
def laptopDetails(request, device):
    product = models.Product.objects.get(name__iexact=device)
    product_serializer = serializers.ProductSerializer(product)
    laptop = models.Laptop.objects.get(
        product__name__iexact=device)
    laptop_serializer = serializers.LaptopSerializer(laptop)

    obj = {**product_serializer.data, **laptop_serializer.data}

    return Response(obj)


@api_view(['GET'])
def mouseList(request):
    data = []

    product = models.Product.objects.filter(category='Mouses')
    product_serializer = serializers.ProductSerializer(product, many=True)
    mouse = models.Mouse.objects.all()
    mouse_serializer = serializers.MouseSerializer(mouse, many=True)

    for i in range(0, len(product_serializer.data)):
        data.append(
            {**product_serializer.data[i], **mouse_serializer.data[i]})

    return Response(data)


@api_view(['GET'])
def mouseDetails(request, device):
    product = models.Product.objects.get(name__iexact=device)
    product_serializer = serializers.ProductSerializer(product)
    mouse = models.Mouse.objects.get(
        product__name__iexact=device)
    mouse_serializer = serializers.MouseSerializer(mouse)

    obj = {**product_serializer.data, **mouse_serializer.data}

    return Response(obj)


@api_view(['GET'])
def monitorList(request):
    data = []

    product = models.Product.objects.filter(category='Monitors')
    product_serializer = serializers.ProductSerializer(product, many=True)
    monitor = models.Monitor.objects.all()
    monitor_serializer = serializers.MonitorSerializer(monitor, many=True)

    for i in range(0, len(product_serializer.data)):
        data.append(
            {**product_serializer.data[i], **monitor_serializer.data[i]})

    return Response(data)


@api_view(['GET'])
def monitorDetails(request, device):
    product = models.Product.objects.get(name__iexact=device)
    product_serializer = serializers.ProductSerializer(product)
    monitor = models.Monitor.objects.get(
        product__name__iexact=device)
    monitor_serializer = serializers.MonitorSerializer(monitor)

    obj = {**product_serializer.data, **monitor_serializer.data}

    return Response(obj)
