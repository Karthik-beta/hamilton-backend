# Generated by Django 4.2.6 on 2023-11-03 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('config', '0005_productreceipe'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productreceipe',
            name='skill_matrix',
            field=models.CharField(),
        ),
        migrations.AlterField(
            model_name='productreceipe',
            name='stages',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='productreceipe',
            name='target_per_hour',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='productreceipe',
            name='target_per_minute',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='productreceipe',
            name='target_per_unit',
            field=models.TimeField(),
        ),
    ]
