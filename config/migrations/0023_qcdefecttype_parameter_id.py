# Generated by Django 4.2.6 on 2024-01-16 10:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('config', '0022_inspectionparameters'),
    ]

    operations = [
        migrations.AddField(
            model_name='qcdefecttype',
            name='parameter_id',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='config.inspectionparameters'),
            preserve_default=False,
        ),
    ]
