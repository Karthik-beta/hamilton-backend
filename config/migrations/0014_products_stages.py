# Generated by Django 4.2.6 on 2023-12-28 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('config', '0013_department_designation_productreceipe_qc_acceptance_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='stages',
            field=models.IntegerField(null=True),
        ),
    ]
