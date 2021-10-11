from django.db import models


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
    starting_price = models.IntegerField(default=0)

    def __str__(self):
        return self.name
