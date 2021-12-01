from django.db.models import fields
from rest_framework import serializers
from categories import models


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = '__all__'


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Laptop
        exclude = ['product']


class MouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Mouse
        exclude = ['product']


class MonitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Monitor
        exclude = ['product']


class ShopsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Shops
        exclude = ['product']
