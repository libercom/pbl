from django.db.models import fields
from rest_framework import serializers
from categories.models import Laptop, Monitor, Mouse, Product, Darwin, Enter


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        exclude = ['product']


class MouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mouse
        exclude = ['product']


class MonitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monitor
        exclude = ['product']


class DarwinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Darwin
        exclude = ['product']
