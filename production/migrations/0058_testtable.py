# Generated by Django 4.2.6 on 2024-02-08 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('production', '0057_machinewisedata_gap'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('field1', models.CharField(blank=True, max_length=255, null=True)),
                ('field2', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'test_table',
            },
        ),
    ]
