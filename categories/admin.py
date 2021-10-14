from django.contrib import admin
from categories.models import Laptop, Mouse, Monitor

# Register your models here.
admin.site.register(Laptop)
admin.site.register(Mouse)
admin.site.register(Monitor)
