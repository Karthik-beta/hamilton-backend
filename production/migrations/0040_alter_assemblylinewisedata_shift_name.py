# Generated by Django 4.2.6 on 2024-01-02 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('production', '0039_assemblylinewisedata_shift_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assemblylinewisedata',
            name='shift_name',
            field=models.JSONField(),
        ),
    ]
