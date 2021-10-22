from django.db import connection, models
from django.db.models.deletion import CASCADE
from django.db.models.fields import IntegerField
from django.db.models.fields.files import ImageField


class Laptop(models.Model):
    OPERATING_SYSTEMS = (
        ('Windows 10', 'Windows 10'),
        ('FreeDOS', 'FreeDOS'),
        ('MacOS', 'MacOS')
    )
    PROCESSOR_MANUFACTURERS = (
        ('AMD', 'AMD'),
        ("Intel", 'Intel')
    )

    name = models.CharField(max_length=50)
    manufacturer = models.CharField(max_length=50)
    ram_amount = models.IntegerField()
    processor_manufacturer = models.CharField(
        max_length=10, choices=PROCESSOR_MANUFACTURERS)
    processor_frequence = models.CharField(max_length=50)
    processor_cores_number = models.IntegerField()
    display_resolution = models.CharField(max_length=50)
    display_diagonal_size = models.CharField(max_length=5)
    storage_capacity = models.CharField(max_length=50)
    graphics_card_type = models.CharField(max_length=50)
    graphics_card_model = models.CharField(max_length=50)
    operating_system = models.CharField(
        max_length=50, choices=OPERATING_SYSTEMS)
    img = models.ImageField(upload_to='uploads/', default='default.jpg')
    category = models.CharField(max_length=50)
    starting_price = models.IntegerField()
    darwin_price = models.IntegerField(default=0)
    darwin_link = models.CharField(max_length=150, default='none')
    enter_price = models.IntegerField(default=0)
    enter_link = models.CharField(max_length=150, default='none')

    def __str__(self):
        return self.name


class Mouse(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    starting_price = models.IntegerField()
    manufacturer = models.CharField(max_length=50)
    connection_type = models.CharField(max_length=50)
    sensor_type = models.CharField(max_length=50)
    max_resolution = models.IntegerField()
    buttons_number = models.IntegerField()
    img = models.ImageField(upload_to='uploads/', default='default.jpg')
    darwin_price = models.IntegerField(default=0)
    darwin_link = models.CharField(max_length=150, default='none')
    enter_price = models.IntegerField(default=0)
    enter_link = models.CharField(max_length=150, default='none')

    def __str__(self):
        return self.name


class Monitor(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    starting_price = models.IntegerField()
    manufacturer = models.CharField(max_length=50)
    display_type = models.CharField(max_length=50)
    resolution = models.CharField(max_length=50)
    response_time = models.IntegerField()
    curved_screen = models.CharField(max_length=3)
    img = models.ImageField(upload_to='uploads/', default='default.jpg')
    darwin_price = models.IntegerField(default=0)
    darwin_link = models.CharField(max_length=150, default='none')
    enter_price = models.IntegerField(default=0)
    enter_link = models.CharField(max_length=150, default='none')

    def __str__(self):
        return self.name


class Product(models.Model):
    CATEGORIES = (
        ('Laptops', 'Laptops'),
        ('Mouses', 'Mouses'),
        ('Monitors', 'Monitors')
    )

    name = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    category = models.CharField(max_length=50, choices=CATEGORIES)
    starting_price = models.IntegerField()
    img = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class LaptopCategory(models.Model):
    product_id = models.IntegerField()
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


class MouseCategory(models.Model):
    product_id = models.IntegerField()
    connection_type = models.CharField(max_length=50)
    sensor_type = models.CharField(max_length=50)
    max_resolution = models.IntegerField()
    buttons_number = models.IntegerField()


class MonitorCategory(models.Model):
    product_id = models.IntegerField()
    display_type = models.CharField(max_length=50)
    resolution = models.CharField(max_length=50)
    response_time = models.IntegerField()
    curved_screen = models.CharField(max_length=3)


class DarwinProducts(models.Model):
    product_id = models.IntegerField()
    price = models.IntegerField()
    link = models.CharField(max_length=50)
    is_available = models.BooleanField()

    def __str__(self):
        return self.product.name


class EnterProducts(models.Model):
    product_id = models.IntegerField()
    price = models.IntegerField()
    link = models.CharField(max_length=50)
    is_available = models.BooleanField()

    def __str__(self):
        return self.product.name
