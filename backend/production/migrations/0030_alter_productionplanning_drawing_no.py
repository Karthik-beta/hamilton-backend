# Generated by Django 4.2.6 on 2023-11-06 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('production', '0029_alter_productionplanning_drawing_no_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productionplanning',
            name='drawing_no',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
