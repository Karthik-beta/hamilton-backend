import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { TableLazyLoadEvent } from 'primeng/table';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alertdaily',
  templateUrl: './alertdaily.component.html',
  styleUrls: ['./alertdaily.component.css']
})
export class AlertdailyComponent implements OnInit {

  constructor(private service: SharedService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  andonList: any[] = [];
  rows: number = 10;
  currentPage: number = 1;
  totalRecords: number = 0;
  text: string = '';
  results: any[] = [];
  rowsPerPageOptions: number[] = [10, 20, 30];
  loading: boolean = false;



  selectedCategory: string = 'All';
  selectedMachine: string='All';
  selectedAssemblyline: string='All';
  selectedShift: string='All';


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
    this.refreshAndList();
    this.metricsData();
    this.checkDatabaseConnection();
  }


  refreshAndList() {
    this.loading = true;

    const params = {
      page: this.currentPage.toString(),
      page_size: this.rows.toString(),
    };

    // this.service.getAndList(params).subscribe((data: any) => {
    //   this.andonList = data.results; // Assuming your API response has a 'results' property
    //   this.totalRecords = data.count;   // Assuming your API response has a 'count' property
    //   this.loading = false;
    // });
  }

  loadLogs(event: TableLazyLoadEvent): void {
    this.loading = true;

    const params: any = {
      page: ((event.first || 0) / (event.rows || 10) + 1).toString(),
      page_size: (event.rows || 10).toString(),
      sortField: event.sortField || '',
      sortOrder: event.sortOrder === 1 ? 'asc' : 'desc',
    };

    // this.service.getAndList(params).subscribe((data: any) => {
    //   this.andonList = data.results;
    //   this.totalRecords = data.count;
    //   this.loading = false;
    // });
  }


  checkDatabaseConnection() {
    // this.databaseSubscription = this.service.getDatabaseStatus().subscribe({
    //   next: (response: any) => {
    //     // Set the database status message based on the response
    //     this.databaseStatus = response.message;
    //   },
    //   error: (error: any) => {
    //     // Set an error message if the database connection check fails
    //     this.databaseStatus = 'Database connection error: ' + error.error.message;
    //   }
    // });
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


  onPageChange(event: any): void {
    this.rows = event.rows;
    this.currentPage = event.page;

    this.refreshAndList();
  }


  onCategoryChange() {
    if (this.selectedCategory === 'All') {
      // If you have an "All" option, show all data
      this.andonList = this.andonList; // Use the instance member this.originalAndonList
    }
    else {
      // Filter the andonList based on the selected category
      this.andonList = this.andonList.filter((item: any) => item.category === this.selectedCategory);
      //                                                   ^^^^^^ Add a type for the 'item' parameter
    }
  }

  onMachineChange() {
    if (this.selectedMachine === 'All') {
      // If you have an "All" option, show all data
      this.andonList = this.andonList; // Use the instance member this.originalAndonList
    }
    else {
      // Filter the andonList based on the selected machine
      this.andonList = this.andonList.filter((item: any) => item.machineId === this.selectedMachine);
      //                                                   ^^^^^^ Add a type for the 'item' parameter
    }
  }

  onAssemblylineChange() {
    if (this.selectedAssemblyline === 'All') {
      // If you have an "All" option, show all data
      this.andonList = this.andonList; // Use the instance member this.originalAndonList
    }
    else {
      // Filter the andonList based on the selected assemblyline
      this.andonList = this.andonList.filter((item: any) => item.assemblyline === this.selectedAssemblyline);
      //                                                   ^^^^^^ Add a type for the 'item' parameter
    }
  }

  onShiftChange() {
    if (this.selectedShift === 'All') {
      // If you have an "All" option, show all data
      this.andonList = this.andonList; // Use the instance member this.originalAndonList
    }
    else {
      // Filter the andonList based on the selected shift
      this.andonList = this.andonList.filter((item: any) => item.shift === this.selectedShift);
      //                                                   ^^^^^^ Add a type for the 'item' parameter
    }
  }

  downloadAndonData() {
    // this.service.downloadAndonData().subscribe({
    //   next: (data) => {
    //     // Create a Blob object from the response data
    //     const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    //     // Create a URL for the Blob
    //     const url = window.URL.createObjectURL(blob);

    //     // Create a link element and trigger a click event to download the file
    //     const a = document.createElement('a');
    //     a.href = url;

    //     // Get the current date
    //     const currentDate = new Date();

    //     // Format the date as a string (e.g., "2023-09-01")
    //     const formattedDate = currentDate.toISOString().split('T')[0];

    //     // Define the filename based on the formatted date
    //     const filename = `Andon_data_${formattedDate}.xlsx`;

    //     // Set the download attribute with the filename
    //     a.download = filename;

    //     document.body.appendChild(a);
    //     a.click();

    //     // Clean up
    //     window.URL.revokeObjectURL(url);
    //     document.body.removeChild(a);

    //     // Show success message
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Success',
    //       detail: 'Excel is being downloaded successfully.'
    //     });
    //   },
    //   error: (error) => {
    //     // Handle any error that might occur during the download
    //     console.error('Error downloading Andon data:', error);

    //     // Show error message
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: 'Failed to download excel.'
    //     });
    //   }
    // });
  }


  metricsData() {
    // this.service.getMetricsData().subscribe((data: any) => {
    //   this.results = data;
    //   this.today_open_alerts = data.today_open_alerts;
    //   this.total_open_alerts = data.total_open_alerts;
    //   this.total_acknowledge_alerts = data.total_acknowledge_alerts;
    //   this.total_resetting_alerts = data.total_resetting_alerts;
    //   this.total_engineering_alerts = data.total_engineering_alerts;
    //   this.total_quality_alerts = data.total_quality_alerts;
    //   this.total_mech_maint_alerts = data.total_mech_maint_alerts;
    //   this.total_elect_maint_alerts = data.total_elect_maint_alerts;
    //   this.total_alerts = data.total_alerts;
    // });
  }





  chartSeries2: ApexNonAxisChartSeries = [6,5,1,1,1,1,1];

  chartDetails2: ApexChart = {
  type: 'pie',
  toolbar: {
    show: true
  }
};



  chartLabels2 = ["RUNNING", "BREAKDOWN", "RESETTING", "ENGINEERING", "ELECT MAINT", "QUALITY", "MECH MAINT"];

  chartTitle2: ApexTitleSubtitle = {
    text: 'Daily Breakdown Analysis',
    align: 'left'
  };

  chartDataLabels2: ApexDataLabels = {
    enabled: true
  };


}
