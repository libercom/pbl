from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('products/add/', views.productCreate, name='product-create'),
    path('products/', views.productList, name='product-list'),
    path('products/popular', views.popularProductsList,
         name='popular-product-list'),
    path('products/<str:device>/', views.productDetails, name='product-details'),
    path('products/search/<str:device>/',
         views.productSearch, name='product-search'),
    path('laptops/', views.laptopList, name='laptop-list'),
    path('laptops/<str:device>/', views.laptopDetails, name='laptop-details'),
    path('mouses/', views.mouseList, name='mouse-list'),
    path('mouses/<str:device>/', views.mouseDetails, name='mouse-details'),
    path('monitors/', views.monitorList, name='monitor-list'),
    path('monitors/<str:device>/', views.monitorDetails, name='monitor-details'),
]
