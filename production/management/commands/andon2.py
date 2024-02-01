from django.core.management.base import BaseCommand
from production.models import ProductionAndon, machineWiseData
from django.db.models import Q
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = 'Updates the actual column in machineWiseData model'

    def handle(self, *args, **options):
        # Get the last record from column 'p' in 'ProductionAndon' model
        last_record = ProductionAndon.objects.latest('machine_datetime').p

        # # Get the current time
        # current_time = datetime.now()

        # Get the current time and add 5 hours and 30 minutes
        current_time = datetime.now() + timedelta(hours=5, minutes=30)


        # Update 'actual' column in 'machineWiseData' model where 'machine_datetime' lies in the range of 'time' field
        # machineWiseData.objects.filter(Q(date__gte=current_time) & Q(date__lte=current_time)).update(actual=last_record)

        # Get the latest record in 'machineWiseData' model
        latest_machine_data = machineWiseData.objects.latest('id')

        # Update 'actual' column in the latest record of 'machineWiseData' model
        latest_machine_data.actual = last_record
        latest_machine_data.save()

        self.stdout.write(self.style.SUCCESS('Successfully updated actual column in machineWiseData model'))