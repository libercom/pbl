from django.http import HttpResponse
from rest_framework import serializers
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from categories.serializers import DarwinProductsSerializer, LaptopCategorySerializer, LaptopSerializer, MonitorCategorySerializer, MouseCategorySerializer, MouseSerializer, MonitorSerializer, ProductSerializer
from categories.models import DarwinProducts, EnterProducts, Laptop, LaptopCategory, Monitor, MonitorCategory, Mouse, MouseCategory, Product


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
def productsList(request):
    products = Product.objects.all()
    products_serializer = ProductSerializer(products, many=True)

    return Response(products_serializer.data)


@api_view(['GET'])
def productsDetails(request, device):
    product = Product.objects.get(name=device)
    product_serializer = ProductSerializer(product, many=False)

    obj = {}

    if product_serializer.data['category'] == 'Laptops':
        laptop = LaptopCategory.objects.get(
            product_id=product_serializer.data['id'])
        laptop_serializer = LaptopCategorySerializer(laptop)
        obj.update(product_serializer.data)
        obj.update(laptop_serializer.data)
    elif product_serializer.data['category'] == 'Monitors':
        monitor = MonitorCategory.objects.get(
            product_id=product_serializer.data['id'])
        monitor_serializer = MonitorCategorySerializer(monitor)
        obj.update(product_serializer.data)
        obj.update(monitor_serializer.data)
    else:
        mouse = MouseCategory.objects.get(
            product_id=product_serializer.data['id'])
        mouse_serializer = MouseCategorySerializer(mouse)
        obj.update(product_serializer.data)
        obj.update(mouse_serializer.data)

    return Response(obj)


@api_view(['GET'])
def productsSearch(request, device):
    products = Product.objects.filter(name__contains=device)
    products_serializer = ProductSerializer(products, many=True)

    return Response(products_serializer.data)


@api_view(['POST'])
def productsCreate(request):
    for i in range(0, len(request.data)):
        data = dict(list(request.data[i].items())[:5])
        shops = request.data[i]['shops']
        product = Product.objects.create(**data)
        product.save()

        if (data['category'] == 'Laptops'):
            device_data = dict(list(request.data[i].items())[5:15])
            laptop = LaptopCategory.objects.create(
                product_id=product.id, **device_data)
            laptop.save()
        elif (data['category'] == 'Monitors'):
            device_data = dict(list(request.data[i].items())[5:9])
            monitor = MonitorCategory.objects.create(
                product_id=product.id, **device_data)
            monitor.save()
        else:
            device_data = dict(list(request.data[i].items())[5:9])
            mouse = MouseCategory.objects.create(
                product_id=product.id, **device_data)
            mouse.save()

        for shop in shops:
            if shop['name'] == 'Darwin':
                shop_data = dict(list(shop.items())[1:4])
                darwin = DarwinProducts.objects.create(
                    product_id=product.id, **shop_data)
                darwin.save()
            elif shop['name'] == 'Enter':
                shop_data = dict(list(shop.items())[1:4])
                enter = EnterProducts.objects.create(
                    product_id=product.id, **shop_data)
                enter.save()

    return Response(request.data)


# class ProductCreateView(CreateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


# class LaptopCreateView(CreateAPIView):
#     queryset = LaptopCategory.objects.all()
#     serializer_class = LaptopCategorySerializer


# class MonitorCreateView(CreateAPIView):
#     queryset = MonitorCategory.objects.all()
#     serializer_class = MonitorCategorySerializer


# class MouseCreateView(CreateAPIView):
#     queryset = MouseCategory.objects.all()
#     serializer_class = MouseCategorySerializer


# class ProductListView(ListAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


# class LaptopListView(ListAPIView):
#     queryset = LaptopCategory.objects.all()
#     serializer_class = LaptopCategorySerializer


# class MonitorListView(ListAPIView):
#     queryset = MonitorCategory.objects.all()
#     serializer_class = MonitorCategorySerializer


# class MouseListView(ListAPIView):
#     queryset = MouseCategory.objects.all()
#     serializer_class = MouseCategorySerializer


# class DarwinProductsListView(ListAPIView):
#     queryset = DarwinProducts.objects.all()
#     serializer_class = DarwinProductsSerializer


# class ProductDestroyView(DestroyAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


# class MouseDestroyView(DestroyAPIView):
#     queryset = MouseCategory.objects.all()
#     serializer_class = MouseCategorySerializer
