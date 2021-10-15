# Generated by Django 3.2.8 on 2021-10-13 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0003_auto_20211011_1628'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mouse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=50)),
                ('starting_price', models.IntegerField()),
                ('manufacturer', models.CharField(max_length=50)),
                ('connection_type', models.CharField(max_length=50)),
                ('sensor_type', models.CharField(max_length=50)),
                ('max_resolution', models.IntegerField()),
                ('buttons_number', models.IntegerField()),
            ],
        ),
    ]