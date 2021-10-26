# Generated by Django 3.2.8 on 2021-10-24 18:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('brand', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=50)),
                ('starting_price', models.IntegerField()),
                ('img', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Darwin',
            fields=[
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='categories.product')),
                ('price', models.IntegerField()),
                ('link', models.CharField(max_length=150)),
                ('is_available', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Enter',
            fields=[
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='categories.product')),
                ('price', models.IntegerField()),
                ('link', models.CharField(max_length=150)),
                ('is_available', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Laptop',
            fields=[
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='categories.product')),
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
            name='Monitor',
            fields=[
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='categories.product')),
                ('display_type', models.CharField(max_length=50)),
                ('resolution', models.CharField(max_length=50)),
                ('response_time', models.IntegerField()),
                ('curved_screen', models.CharField(max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Mouse',
            fields=[
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='categories.product')),
                ('connection_type', models.CharField(max_length=50)),
                ('sensor_type', models.CharField(max_length=50)),
                ('max_resolution', models.IntegerField()),
                ('buttons_number', models.IntegerField()),
            ],
        ),
    ]
