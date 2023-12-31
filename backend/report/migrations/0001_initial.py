# Generated by Django 4.2.6 on 2023-10-31 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='productionReport',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('job_id', models.CharField(max_length=100, unique=True)),
                ('customer', models.CharField(max_length=100)),
                ('po_no', models.CharField(max_length=100)),
                ('batch_no', models.CharField(max_length=100)),
                ('assigned_date', models.DateField(blank=True, null=True)),
                ('expected_date', models.DateField(blank=True, null=True)),
                ('company', models.CharField()),
                ('plant', models.CharField()),
                ('shopfloor', models.CharField()),
                ('assembly_line', models.CharField()),
                ('machine_id', models.CharField()),
                ('product_id', models.CharField()),
                ('date', models.DateField()),
                ('shift_a', models.CharField(blank=True, null=True)),
                ('shift_b', models.CharField(blank=True, null=True)),
                ('shift_c', models.CharField(blank=True, null=True)),
                ('planned_hours', models.IntegerField()),
                ('planned_production', models.IntegerField(blank=True, null=True)),
                ('remaining_hours', models.IntegerField()),
                ('balance_production', models.IntegerField()),
                ('manager', models.CharField()),
            ],
            options={
                'db_table': 'production_report',
            },
        ),
    ]
