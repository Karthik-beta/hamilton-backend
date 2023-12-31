# Generated by Django 4.2.6 on 2023-11-07 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('config', '0010_alter_productreceipe_units_per_hour_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='attendanceRules',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('shift_name', models.CharField(max_length=100)),
                ('shift_start_time', models.TimeField()),
                ('shift_end_time', models.TimeField()),
                ('late_grace_time', models.TimeField()),
                ('early_grace_time', models.TimeField()),
            ],
            options={
                'db_table': 'attendance_rules',
            },
        ),
    ]
