import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ChartComponent,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};


@Component({
  selector: 'app-assemblylineanalysis',
  templateUrl: './assemblylineanalysis.component.html',
  styleUrls: ['./assemblylineanalysis.component.css']
})
export class AssemblylineanalysisComponent implements OnInit {
  chartSeries: ApexNonAxisChartSeries = [43,12,40, 32, 28, 20, 12];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["RUNNING", "REAKDOWN", "RESETTING", "ENGINEERING", "ELECT MAINT", "QUALITY", "MECH MAINT"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Monthly Analysis',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };

  constructor() {
  }

  ngOnInit(): void {
  }


  chartSeries2: ApexNonAxisChartSeries = [43,12,23, 32, 15, 22, 8];

  chartDetails2: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels2 = ["RUNNING", "BREAKDOWN", "RESETTING", "ENGINEERING", "ELECT MAINT", "QUALITY", "MECH MAINT"];

  chartTitle2: ApexTitleSubtitle = {
    text: 'Weekly Analysis',
    align: 'center'
  };

  chartDataLabels2: ApexDataLabels = {
    enabled: true
  };

  chartSeries3: ApexNonAxisChartSeries = [43,12,5, 8, 11, 22, 8];

  chartDetails3: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels3 = ["RUNNING", "BREAKDOWN", "RESETTING", "ENGINEERING", "ELECT MAINT", "QUALITY", "MECH MAINT"];

  chartTitle3: ApexTitleSubtitle = {
    text: 'Daily Analysis',
    align: 'center'
  };

  chartDataLabels3: ApexDataLabels = {
    enabled: true
  };


  chartSeries4: ApexAxisChartSeries = [
    {
      name: 'Series 1', // Provide a name for the series
      data: [
        { x: "Jan", y: 5 },
        { x: "Feb", y: 8 },
        { x: "Mar", y: 11 },
        { x: "Apr", y: 22 },
        { x: "May", y: 8 },
        { x: "Jun", y: 5 },
        { x: "Jul", y: 8 },
        { x: "Aug", y: 11 },
        { x: "Sep", y: 22 },
        { x: "Oct", y: 8 },
        { x: "Nov", y: 5 },
        { x: "Dec", y: 8 },
      ]
    }
  ];

  chartDetails4: ApexChart = {
    type: 'bar',
    height: '300px',
    toolbar: {
      show: true
    }
  };

  chartLabels4 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"];

  chartTitle4: ApexTitleSubtitle = {
    text: 'Month Wise Analysis',
    align: 'center'
  };

  chartDataLabels4: ApexDataLabels = {
    enabled: true
  };

}
