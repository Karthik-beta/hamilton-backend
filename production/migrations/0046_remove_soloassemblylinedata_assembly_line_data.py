# Generated by Django 4.2.6 on 2024-01-03 05:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('production', '0045_rename_stage_name_soloassemblylinedata_stage_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='soloassemblylinedata',
            name='assembly_line_data',
        ),
    ]
