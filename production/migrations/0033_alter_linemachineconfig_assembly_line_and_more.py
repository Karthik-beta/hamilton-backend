# Generated by Django 4.2.6 on 2023-12-07 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('production', '0032_alter_machinewisedata_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='linemachineconfig',
            name='assembly_line',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='assigned_end_production',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='assigned_start_production',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='break_time',
            field=models.CharField(blank=True, default='01:00:00', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='company',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='job_id',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='machine_id',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='manager',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='plant',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='product_id',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='product_target',
            field=models.CharField(default='00:01:00', max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='required_time',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='linemachineconfig',
            name='shopfloor',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='assembly_line',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='company',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='job_id',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='machine_id',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='manager',
            field=models.CharField(default='XYZ', max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='plant',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='product_id',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='shift_a',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='shift_b',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='shift_c',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='linemachineslotconfig',
            name='shopfloor',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='machinewisedata',
            name='assembly_line',
            field=models.CharField(default='TSE', max_length=255),
        ),
        migrations.AlterField(
            model_name='machinewisedata',
            name='machine_id',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='machinewisedata',
            name='plant',
            field=models.CharField(default='PUNE', max_length=255),
        ),
        migrations.AlterField(
            model_name='machinewisedata',
            name='shopfloor',
            field=models.CharField(default='XYZ', max_length=255),
        ),
        migrations.AlterField(
            model_name='machinewisedata',
            name='time',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='productionplanning',
            name='required_time',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
