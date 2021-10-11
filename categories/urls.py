from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('laptops/', views.laptopList, name='laptops'),
    path('laptops/<str:name>', views.laptopDetails, name='laptop-details'),
]
