from rest_framework import serializers
from categories.models import Laptop


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = [
            'id',
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
