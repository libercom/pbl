from django.db import connection, models
from django.db.models.deletion import CASCADE
from django.db.models.fields import IntegerField
from django.db.models.fields.files import ImageField


class Product(models.Model):
    name = models.CharField(max_length=50, unique=True)
    brand = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    starting_price = models.IntegerField()
    img = models.CharField(max_length=150)
    views = models.IntegerField()

    def __str__(self):
        return self.name


class Laptop(models.Model):
    product = models.OneToOneField(
        Product, on_delete=CASCADE, primary_key=True)
    ram_amount = models.IntegerField()
    processor_manufacturer = models.CharField(max_length=10)
    processor_frequence = models.CharField(max_length=50)
    processor_cores_number = models.IntegerField()
    display_resolution = models.CharField(max_length=50)
    display_diagonal_size = models.CharField(max_length=5)
    storage_capacity = models.CharField(max_length=50)
    graphics_card_type = models.CharField(max_length=50)
    graphics_card_model = models.CharField(max_length=50)
    operating_system = models.CharField(max_length=50)


class Mouse(models.Model):
    product = models.OneToOneField(
        Product, on_delete=CASCADE, primary_key=True)
    connection_type = models.CharField(max_length=50)
    sensor_type = models.CharField(max_length=50)
    max_resolution = models.IntegerField()
    buttons_number = models.IntegerField()


class Monitor(models.Model):
    product = models.OneToOneField(
        Product, on_delete=CASCADE, primary_key=True)
    display_type = models.CharField(max_length=50)
    resolution = models.CharField(max_length=50)
    response_time = models.IntegerField()
    curved_screen = models.CharField(max_length=3)


class Darwin(models.Model):
    product = models.OneToOneField(
        Product, on_delete=CASCADE, primary_key=True)
    price = models.IntegerField()
    link = models.CharField(max_length=150)
    is_available = models.BooleanField()

    def __str__(self):
        return self.product.name


class Enter(models.Model):
    product = models.OneToOneField(
        Product, on_delete=CASCADE, primary_key=True)
    price = models.IntegerField()
    link = models.CharField(max_length=150)
    is_available = models.BooleanField()

    def __str__(self):
        return self.product.name
