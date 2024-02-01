from django.core.management.base import BaseCommand
from production.models import ProductionAndon, soloAssemblyLineData
from django.db.models import Q
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = 'Updates the actual column in machineWiseData model'

    def handle(self, *args, **options):
        # Get the last record from column 'p' in 'ProductionAndon' model
        last_record_value = ProductionAndon.objects.latest('machine_datetime').p

        # Get the current time and add 5 hours and 30 minutes
        current_time = datetime.now()

        # Check if the time is between 08 to 20 hours
        if 8 <= current_time.hour <= 20:
            shift = 'FS'
        else:
            shift = 'SS'

        # # Update 'actual' and 'shift' fields in 'soloAssemblyLineData' model
        # soloAssemblyLineData.objects.filter(
        #     date=current_time.date(),
        #     shift=shift
        # ).update(actual=last_record_value, shift=shift)


        # Get the soloAssemblyLineData instance based on date and shift
        data_instance = soloAssemblyLineData.objects.get(
            date=current_time.date(),
            shift=shift
        )

        # Update 'actual' and 'shift' fields
        data_instance.actual = last_record_value
        data_instance.shift = shift
        data_instance.save()

        self.stdout.write(self.style.SUCCESS('Successfully updated actual column in soloAssemblyLineData model.'))