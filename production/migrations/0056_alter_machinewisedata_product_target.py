# Generated by Django 4.2.6 on 2024-02-06 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('production', '0055_alter_machinewisedata_product_target'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machinewisedata',
            name='product_target',
            field=models.IntegerField(default=60),
        ),
    ]