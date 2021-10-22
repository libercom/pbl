# Generated by Django 3.2.8 on 2021-10-19 15:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0008_auto_20211015_1630'),
    ]

    operations = [
        migrations.CreateModel(
            name='LaptopCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ram_amount', models.IntegerField()),
                ('processor_manufacturer', models.CharField(max_length=10)),
                ('processor_frequence', models.CharField(max_length=50)),
                ('processor_cores_number', models.IntegerField()),
                ('display_resolution', models.CharField(max_length=50)),
                ('display_diagonal_size', models.CharField(max_length=5)),
                ('storage_capacity', models.CharField(max_length=50)),
                ('graphics_card_type', models.CharField(max_length=50)),
                ('graphics_card_model', models.CharField(max_length=50)),
                ('operating_system', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='MonitorCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('display_type', models.CharField(max_length=50)),
                ('resolution', models.CharField(max_length=50)),
                ('response_time', models.IntegerField()),
                ('curved_screen', models.CharField(max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='MouseCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('connection_type', models.CharField(max_length=50)),
                ('sensor_type', models.CharField(max_length=50)),
                ('max_resolution', models.IntegerField()),
                ('buttons_number', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('brand', models.CharField(max_length=50)),
                ('category', models.CharField(choices=[('Laptops', 'Laptops'), ('Mouses', 'Mouses'), ('Monitors', 'Monitors')], max_length=50)),
                ('starting_price', models.IntegerField()),
                ('img', models.SlugField()),
            ],
        ),
        migrations.CreateModel(
            name='EnterProducts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('link', models.SlugField()),
                ('is_available', models.BooleanField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='categories.product')),
            ],
        ),
        migrations.CreateModel(
            name='DarwinProducts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('link', models.SlugField()),
                ('is_available', models.BooleanField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='categories.product')),
            ],
        ),
    ]
