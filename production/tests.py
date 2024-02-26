from django.core.management import call_command
from django.test import TestCase
from datetime import date
from production.models import machineWiseData
from django.db import transaction

class TestMachineWiseDataCommand(TestCase):
    @transaction.atomic
    def test_machineWiseData_command(self):
        # Ensure no records exist with the same date and time
        self.assertFalse(machineWiseData.objects.filter(date=date.today()).exists())

        # Run the management command
        call_command('machinewise')

        # Print the content of the database for debugging
        print("Database content:")
        for item in machineWiseData.objects.all():
            print(f"ID: {item.id}, Date: {item.date}, Time: {item.time}")

        # Check if a new row was created with the expected time range
        self.assertTrue(machineWiseData.objects.filter(date=date.today(), time='13 - 14').exists())

        # Run the management command again to test the case when the row already exists
        call_command('machinewise')

        # Ensure that the command handles the case when the row already exists
        self.assertEqual(machineWiseData.objects.filter(date=date.today(), time='13 - 14').count(), 1)

        # Clean up by deleting the test row (if it was created)
        machineWiseData.objects.filter(date=date.today(), time='13 - 14').delete()





from django.test import TestCase
from django.utils import timezone
from production.models import machineWiseData
from config.models import machine
from django.core.management import call_command

class CommandTestCase(TestCase):
    def setUp(self):
        # Set up necessary data for testing, like machines
        machine.objects.create(machine_name="Machine1")
        machine.objects.create(machine_name="Machine2")

    def test_create_machineWiseData_objects(self):
        # Call the management command to create machineWiseData objects
        call_command('Command')  # Replace 'your_command_name' with the actual name of your management command

        # Get the current date and hour in IST timezone
        current_date = timezone.now().astimezone(timezone.pytz.timezone('Asia/Kolkata')).date()
        current_hour = timezone.now().astimezone(timezone.pytz.timezone('Asia/Kolkata')).hour

        # Loop through the next 24 hours
        for hour in range(current_hour, current_hour + 24):
            # Calculate expected time range for each hour
            start_time = timezone.datetime(current_date.year, current_date.month, current_date.day, hour % 24, 0)
            end_time = start_time + timezone.timedelta(hours=1)
            expected_time_range = f'{start_time.strftime("%H:%M")} - {end_time.strftime("%H:%M")}'

            # Check if machineWiseData objects are created for each machine and hour
            for machine_instance in machine.objects.all():
                created_object = machineWiseData.objects.filter(
                    date=current_date,
                    time=expected_time_range,
                    machine_id=machine_instance.machine_name
                ).exists()

                self.assertTrue(created_object, f"No object created for machine {machine_instance.machine_name} and time range {expected_time_range}")

    def tearDown(self):
        # Clean up any data created during the test
        machine.objects.all().delete()
        machineWiseData.objects.all().delete()
