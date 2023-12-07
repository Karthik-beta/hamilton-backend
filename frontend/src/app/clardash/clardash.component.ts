import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { ApexXAxis, ApexYAxis, ApexTooltip } from 'ng-apexcharts';



@Component({
  selector: 'app-clardash',
  templateUrl: './clardash.component.html',
  styleUrls: ['./clardash.component.css']
})
export class ClardashComponent implements OnInit {

  constructor(private Service: SharedService) { }


  ngOnInit(): void {
    this.fetchAttendanceStatistics();
    this.fetchEmployeePresence();
  }

  fetchEmployeePresence(): void {
    this.Service.getemployee_presence().subscribe((data: any) => {
      if (data && data.presence_count) {
        const presenceCount = data.presence_count;

        this.chartBarLabels = presenceCount.map((entry: any) => entry.date);
        this.chartBarSeries = [
          {
            name: 'Present',
            data: presenceCount.map((entry: any) => entry.present_count)
          },
          {
            name: 'Absent',
            data: presenceCount.map((entry: any) => entry.absent_count)
          }
        ];
      }
    });
  }

  chartBarOptions: ApexChart = {
    type: 'bar',
    toolbar: {
      show: false
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  };
  chartBarTitle: ApexTitleSubtitle = {
    text: 'Previous 7 days attendance',
    align: 'center'
  };

  chartBarSeries: any[] = [];
  chartBarLabels: string[] = [];




  fetchAttendanceStatistics(): void {
    this.Service.getAttendanceStatistics().subscribe((data: any) => {
      const attendanceStats = data.attendance_stats;


      // Pre-set the chart label colors based on attendance status
      const labelColors: { [key: string]: string } = {
        'Present': '#00FF00', // Green for "Present"
        'Absent': '#FF0000',  // Red for "Absent"
        'Late Entry': '#FFA500', // Orange for "Late Entry"
        'Early Exit': '#008080', // Teal for "Early Exit"
        // Add more colors for other attendance statuses if needed
      };


      this.chartLabels = attendanceStats.map((stat: any) => {
        return stat.attendance_status;
      });


      this.chartSeries = attendanceStats.map((stat: any) => stat.count);
      this.chartDataColors = attendanceStats.map((stat: any) => labelColors[stat.attendance_status]);
    });
  }




  chartDataColors: string[] = []; // Initialize an empty array for chart label colors




  chartSeries: ApexNonAxisChartSeries = [];
  chartLabels: string[] = []; // Initialize an empty array for chart labels


  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: false
    }
  };
  chartTitle: ApexTitleSubtitle = {
    text: 'Attendance Analysis',
    align: 'left'
  };


  chartDataLabels: ApexDataLabels = {
    enabled: true,
  style: {
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
  }
  };

  getPresentCount(): number {
    const presentIndex = this.chartLabels.indexOf('Present');
    if (presentIndex !== -1) {
      return this.chartSeries[presentIndex];
    }
    return 0; // Default value if "Present" label is not found
  }

  getAbsentCount(): number {
    const absentIndex = this.chartLabels.indexOf('Absent');
    if (absentIndex !== -1) {
      return this.chartSeries[absentIndex];
    }
    return 0; // Default value if "Absent" label is not found
  }

  getLateEntryCount(): number {
    const lateEntryIndex = this.chartLabels.indexOf('Late Entry');
    if (lateEntryIndex !== -1) {
      return this.chartSeries[lateEntryIndex];
    }
    return 0; // Default value if "Late Entry" label is not found
  }

  getEarlyExitCount(): number {
    const earlyExitIndex = this.chartLabels.indexOf('Early Exit');
    if (earlyExitIndex !== -1) {
      return this.chartSeries[earlyExitIndex];
    }
    return 0; // Default value if "Early Exit" label is not found
  }

  getLiveHeadcount(): number {
    const totalPresent = this.getPresentCount();
    const totalAbsent = this.getAbsentCount();
    const totalEarlyExit = this.getEarlyExitCount();

    return totalPresent - (totalAbsent + totalEarlyExit);
  }





}
