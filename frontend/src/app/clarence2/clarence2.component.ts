import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SharedService } from '../shared.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';


@Component({
  selector: 'app-clarence2',
  templateUrl: './clarence2.component.html',
  styleUrls: ['./clarence2.component.css']
})
export class Clarence2Component implements OnInit {


  private APIUrl = 'http://localhost:8000/employee/';


  dataSource!: MatTableDataSource<any>;
  originalData: any[] = [];
  displayedColumns: string[] = ['position', 'employeeid', 'device_enroll_id', 'employee_name', 'company', 'location', 'department', 'category', 'designation', 'logdate', 'shift', 'attendance', 'first_logtime', 'last_logtime', 'total_time', 'late', 'early', 'OT', 'lunch', 'status'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  dateRange: Date[] = [];
  loading: boolean = true; // Add the loading state property




  constructor(private Service: SharedService) { }




  ngOnInit(): void {
    this.fetchData();
    this.fetchAttendanceStatistics();
  }


  fetchData(): void {
    this.Service.getGislogList().subscribe((response: any) => {
      if (Array.isArray(response.employees) && Array.isArray(response.processed_data)) {
        this.originalData = this.linkData(response.processed_data, response.employees);
        this.initializeDataSource(this.originalData);
        // Fetch attendance statistics only after the main data is fetched
        this.fetchAttendanceStatistics();
        this.loading = false; // Set loading to false once data is fetched
      } else {
        console.error('Received data.employees or data.processed_data is not an array:', response);
        this.loading = false; // Set loading to false if there's an error
      }
    });
  }


  linkData(processedData: any[], employees: any[]): any[] {
    return processedData.map((processedItem: any) => {
      const employeeMatch = employees.find((employee: any) => employee.employee_id === processedItem.employeeid);
      if (employeeMatch) {
        return {
          ...processedItem,
          ...employeeMatch
        };
      } else {
        return processedItem;
      }
    });
  }


  initializeDataSource(data: any[]): void {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyDateRangeFilter(): void {
    if (this.dateRange.length === 2) {
      const [fromDate, toDate] = this.dateRange;
      const filteredData = this.originalData.filter((element: any) => {
        const logDate = new Date(element.logdate);
        return logDate >= fromDate && logDate <= toDate;
      });


      this.dataSource.data = filteredData;
    }
  }


  resetDateRangeFilter(): void {
    this.dateRange = [];
    this.dataSource.data = this.originalData;
  }


  // fetchAttendanceStatistics(): void {
  //   this.Service.getAttendanceStatistics().subscribe((data: any) => {
  //     const attendanceStats = data.attendance_stats;
  //     this.chartLabels = attendanceStats.map((stat: any) => stat.attendance_status);
  //     this.chartSeries = attendanceStats.map((stat: any) => stat.count);
  //   });
  // }




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
    fontSize: '12px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
  }
  };










}



