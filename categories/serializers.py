from django.db.models import fields
from rest_framework import serializers
from categories.models import Laptop, Mouse, Monitor


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = [
            'name',
            'category',
            'starting_price',
            'processor_cores_number',
            'processor_manufacturer',
            'processor_frequence',
            'display_resolution',
            'display_diagonal_size',
            'ram_amount',
            'storage_capacity',
            'graphics_card_type',
            'graphics_card_model',
            'operating_system',
            'manufacturer',
            'img',
        ]


class MouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mouse
        fields = [
            'name',
            'category',
            'starting_price',
            'manufacturer',
            'connection_type',
            'sensor_type',
            'max_resolution',
            'buttons_number',
            'img',
        ]


class MonitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monitor
        fields = [
            'name',
            'category',
            'starting_price',
            'manufacturer',
            'display_type',
            'resolution',
            'response_time',
            'curved_screen',
            'img',
        ]
