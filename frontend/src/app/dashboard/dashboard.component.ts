import { Component, OnInit, ViewChild } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: "Breakdowns",
        data: [10, 41, 35, 51, 49, 62, 69, 56, 65, 55]
      }
    ],
    chart: {
      height: 250,
      type: "line"
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    },
    dataLabels: {},
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: "Total Breakdowns by Month",
      align: "left"
    }
  };

  constructor(private service: SharedService) {}

  ngOnInit() {
    this.checkDatabaseConnection();
  }


  databaseStatus: string = '';
  databaseSubscription: Subscription | undefined;

  checkDatabaseConnection() {
    this.databaseSubscription = this.service.getDatabaseStatus().subscribe({
      next: (response: any) => {
        // Set the database status message based on the response
        this.databaseStatus = response.message;
      },
      error: (error: any) => {
        // Set an error message if the database connection check fails
        this.databaseStatus = 'Database connection error: ' + error.error.message;
      }
    });
  }



  public chartOptions2: Partial<ChartOptions> = {
    series: [
      {
        name: "Casseroles",
        data: [10, 41, 35, 51, 49, 62, 69, 56, 65, 55]
      },
      {
        name: "Carafes",
        data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65]
      }
    ],
    chart: {
      height: 250,
      type: "bar",
      stacked: true
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    },
    dataLabels: {},
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: "Total Production by Month",
      align: "left"
    }
  };



}
