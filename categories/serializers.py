from rest_framework import serializers
from categories.models import Laptop, Mouse, Monitor, Product, LaptopCategory, MonitorCategory, MouseCategory, DarwinProducts, EnterProducts


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
            'darwin_price',
            'darwin_link',
            'enter_price',
            'enter_link',
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
            'darwin_price',
            'darwin_link',
            'enter_price',
            'enter_link',
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
            'darwin_price',
            'darwin_link',
            'enter_price',
            'enter_link',
        ]


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class LaptopCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = LaptopCategory
        exclude = ['id', 'product_id']


class MouseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MouseCategory
        exclude = ['id', 'product_id']


class MonitorCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MonitorCategory
        exclude = ['id', 'product_id']


class DarwinProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DarwinProducts
        exclude = ['id', 'product_id']
