import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analysisline',
  templateUrl: './analysisline.component.html',
  styleUrls: ['./analysisline.component.css']
})
export class AnalysislineComponent {

  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Monthly Analysis"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 48.7, name: "Mechanical" },
		  { y: 28.5, name: "Electrical" },
		  { y: 22.8, name: "Others" }
		]
	  }]
	}

  chartOptions2 = {
	  animationEnabled: true,
	  title: {
		text: "Weekly Analysis"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 36.7, name: "Mechanical" },
		  { y: 37.6, name: "Electrical" },
		  { y: 25.7, name: "Others" }
		]
	  }]
	}

  chartOptions3 = {
	  animationEnabled: true,
	  title: {
		text: "Daily Analysis"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 53.4, name: "Mechanical" },
		  { y: 28.2, name: "Electrical" },
		  { y: 18.4, name: "Others" }
		]
	  }]
	}

  chart: any;

  chartOptions4 = {
    title: {
      text: "Month Wise Analysis"
    },
    animationEnabled: true,
    axisX: {
      title: "Months",
      interval: 10,
      valueFormatString: "MMM"
    },
    data: [{
      type: "column",
      dataPoints: [
        { x: 10, y: 71, label: "Jan" },
        { x: 20, y: 55, label: "Feb" },
        { x: 30, y: 50, label: "Mar" },
        { x: 40, y: 65, label: "Apr" },
        { x: 50, y: 110, label: "May" },
        { x: 60, y: 68, label: "Jun" },
        { x: 70, y: 28, label: "Jul" },
        { x: 80, y: 34, label: "Aug" },
        { x: 90, y: 14, label: "Sep" },
        { x: 100, y: 26, label: "Oct" },
        { x: 110, y: 32, label: "Nov" },
        { x: 120, y: 17, label: "Dec" }
      ]
    }]
  };

}
