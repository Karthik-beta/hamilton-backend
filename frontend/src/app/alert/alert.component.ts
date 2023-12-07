import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private service: SharedService) { }



  AndonOpenAlertsList: any[] = [];
  results: any[] = [];



  today_open_alerts: number = 0;
  total_open_alerts: number = 0;
  total_acknowledge_alerts: number = 0;
  total_resetting_alerts: number = 0;
  total_engineering_alerts: number = 0;
  total_quality_alerts: number = 0;
  total_mech_maint_alerts: number = 0;
  total_elect_maint_alerts: number = 0;
  total_alerts: number = 0;


  databaseStatus: string = '';
  databaseSubscription: Subscription | undefined;



  ngOnInit(): void {
    this.metricsData();
    this.checkDatabaseConnection();
    this.AndonOpenAlerts();

    // Call the calculateTotalTime function every 30 seconds
  setInterval(() => {
    this.calculateTotalTime('2022-01-01T00:00:00Z');
    this.AndonOpenAlerts();
    this.metricsData();
  }, 30000);

  }



  metricsData() {
    this.service.getMetricsData().subscribe((data: any) => {
      // this.results = data;
      this.today_open_alerts = data.today_open_alerts;
      this.total_open_alerts = data.total_open_alerts;
      this.total_acknowledge_alerts = data.total_acknowledge_alerts;
      this.total_resetting_alerts = data.total_resetting_alerts;
      this.total_engineering_alerts = data.total_engineering_alerts;
      this.total_quality_alerts = data.total_quality_alerts;
      this.total_mech_maint_alerts = data.total_mech_maint_alerts;
      this.total_elect_maint_alerts = data.total_elect_maint_alerts;
      this.total_alerts = data.total_alerts;
    });
  }

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

  // checkDatabaseConnection() {
  //   this.service.getDatabaseStatus().subscribe((data: any) => {
  //     this.databaseStatus = data.message;
  //   }
  //   );
  // }

  ngOnDestroy() {
    // Unsubscribe from the observable to prevent memory leaks
    if (this.databaseSubscription) {
      this.databaseSubscription.unsubscribe();
    }
  }


  AndonOpenAlerts() {
    this.service.getAndonOpenAlerts().subscribe((data: any) => {
      this.AndonOpenAlertsList = data;
    }
    );
  }


  calculateTotalTime(andonAlerts: string): string {
    const andonAlertsTime = new Date(andonAlerts); // Convert the string to a Date object
    const currentTime = new Date(); // Get the current time

    // Calculate the time difference in milliseconds
    const timeDifference = currentTime.getTime() - andonAlertsTime.getTime();

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(timeDifference / 3600000); // 1 hour = 3600000 milliseconds
    const minutes = Math.floor((timeDifference % 3600000) / 60000); // 1 minute = 60000 milliseconds
    const seconds = Math.floor((timeDifference % 60000) / 1000); // 1 second = 1000 milliseconds

    // Create a formatted string for the total time
    // const formattedTime = `${hours}h ${minutes}m ${seconds}s`;
    const formattedTime = `${hours}h ${minutes}m`;

    return formattedTime;
  }




}
