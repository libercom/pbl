from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('laptops/', views.laptopList, name='laptops'),
    path('laptops/<str:name>', views.laptopDetails, name='laptop-details'),
    path('laptops/search/<str:name>', views.laptopSearch, name='laptop-search'),
    path('mouses/', views.mouseList, name='mouses'),
    path('mouses/search/<str:name>', views.mouseSearch, name='mouse-search'),
    path('devices/', views.deviceList, name='devices'),
    path('devices/search/<str:name>', views.deviceSearch, name='device-search'),
]
