from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    # path('laptops/', views.laptopList, name='laptops'),
    # path('laptops/<str:name>', views.laptopDetails, name='laptop-details'),
    # path('laptops/search/<str:name>', views.laptopSearch, name='laptop-search'),
    # path('mouses/', views.mouseList, name='mouses'),
    # path('mouses/search/<str:name>', views.mouseSearch, name='mouse-search'),
    path('devices/', views.deviceList, name='devices'),
    path('devices/search/<str:name>', views.deviceSearch, name='device-search'),
    path('products/add/', views.productsCreate, name='product-create'),
    path('products/', views.productsList, name='product-list'),
    path('products/<str:device>/', views.productsDetails, name='products-details'),
    path('products/search/<str:device>/',
         views.productsSearch, name='products-search'),
    # path('products/', views.ProductListView.as_view(), name='producst-list'),
    # path('laptops/', views.LaptopListView.as_view(), name='producst-list'),
    # path('mouses/', views.MouseListView.as_view(), name='producst-list'),
    # path('monitors/', views.MonitorListView.as_view(), name='producst-list'),
    # path('darwin/', views.DarwinProductsListView.as_view(), name='producst-list'),
    # path('products/create', views.ProductCreateView.as_view()),
    # path('laptops/create', views.LaptopCreateView.as_view()),
    # path('mouses/create', views.MouseCreateView.as_view()),
    # path('monitors/create', views.MonitorCreateView.as_view()),
    # path('products/destroy/<pk>', views.ProductDestroyView.as_view()),
    # path('mouses/destroy/<pk>', views.MouseDestroyView.as_view()),
]
