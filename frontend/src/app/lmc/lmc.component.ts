import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Pipe, PipeTransform } from '@angular/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-lmc',
  templateUrl: './lmc.component.html',
  styleUrls: ['./lmc.component.css']
})


export class LmcComponent implements OnInit {


      //PrimeNg Table
      andonList: any[] = [];
      rows: number = 10;
      currentPage: number = 1;
      totalRecords: number = 1;
      text: string = '';
      results: any[] = [];
      rowsPerPageOptions: number[] = [10, 20, 30];
      loading: boolean = false;





  constructor(private service: SharedService) {
    // this.startDate = '2023-10-19';
    // this.selectedTime = '06:00';
  }



  productionPlanList:any=[];
  ModalTitle:string="";
  ActivateAddEditProdPlanComp:boolean=false;
  prodplan:any;
  searchText:string="";
  ProductionPlanListWithoutFilter:any=[];



    // Open JobWorks
    openJobList: any[] = [];

    slotList: any[] = [];


    // Slot Configuration
    start_date: string = '';
    quantity: number = 0;
    selectedProduct: any;
    selected_company: string="HAMILTON";
    selected_plant: string="CHENNAI";
    selected_shopfloor: string="XYZ";
    selected_assemblyline: string="TSE";
    selected_machineid: string="Select";
    selected_shift: string="Select";


    addLineMachineConfigSlot() {
      // if (this.selectedJobWork && this.selectedJobWork.job_id && this.productionPlanList && this.productionPlanList.product_id) {
        // Construct the data object to send
        const slot = {
          product_id: this.productionPlanList[0].product_id, // Replace with the actual property name
          job_id: this.productionPlanList[0].job_id,
          quantity: this.productionPlanList[0].quantity, // Replace with the actual property name
          start_date: this.startDate,
          company: this.selected_company,
          plant: this.selected_plant,
          shopfloor: this.selected_shopfloor,
          assembly_line: this.selected_assemblyline,
          machine_id: this.selected_machineid,
          // start_shift: this.selected_shift,
          // start_time: this.selectedTime,
        };

        console.log('Data to send:', slot);

        // Call the service method to send the data
        this.service.addLineMachineConfigSlot(slot).subscribe({
          next: (response) => {
            // Handle the response, e.g., show a success message
            console.log('Response from the server:', response);

            // After successfully posting data, query for data with the same job_id
            this.getLineMachineConfigData({ job_id: slot.job_id });
          },
          error: (error) => {
            // Handle any errors, e.g., show an error message
            console.error('Error sending data:', error);
          }
        });
      }




  // Function to query data with the same job_id
  getLineMachineConfigData(params: any) {
    this.service.getLineMachineConfigSlot(params).subscribe({
      next: (data) => {
        this.slotList = data; // Update slotList with the retrieved data
        console.log('Data from slot with the same job_id:', data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }


  // Declare these variables in your component
startDate: string="";
selectedShift: string="";
selectedTime: string="";

// Function to convert time to 24-hour format
convertTo24HourFormat() {
  // Split the time into hours and minutes
  const timeParts = this.selectedTime.split(":");
  if (timeParts.length === 2) {
    const originalHours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    // Extract AM or PM
    const ampm = this.selectedTime.slice(-2);

    // Create a new variable for converted hours
    let hours = originalHours;

    // Convert to 24-hour format
    if (ampm === "PM" && hours < 12) {
      hours += 12;
    } else if (ampm === "AM" && hours === 12) {
      hours = 0;
    }

    // Format the time in 24-hour format
    this.selectedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    console.log('Time in 24-hour format:', this.selectedTime);
  }
}



selectedJobWork: any; // This will store the selected job work

// onJobSelected(event: any) {
//   const selectedJobId = event.target.value;
//   console.log('Selected job ID:', selectedJobId);

//   // Call the service method to get production plan by ID
//   this.service.getProdPlanById(selectedJobId).subscribe({
//     next: (data) => {
//       this.productionPlanList = data; // Update the production plan list
//       console.log('Production plan data:', data);
//     },
//     error: (error) => {
//       console.error('Error fetching production plan data:', error);
//     },
//   });
// }

onJobSelected(event: any) {
  const selectedJobId = event.target.value;
  // console.log('Selected job ID:', selectedJobId);

  // Call the service method to get production plan by ID
  this.service.getProdPlanById({ job_id: selectedJobId }).subscribe({
    next: (data) => {
      // console.log('Production plan data:', data);

      // Check the structure of the response and identify the correct property for "id"
      // For example, if "id" is nested, access it accordingly
      const correspondingId = data.id; // Update this line based on the actual structure

      // console.log('Corresponding ID:', correspondingId);

      // If you want to update the production plan list with the selected ID
      this.productionPlanList = data; // Update with the actual data structure
    },
    error: (error) => {
      console.error('Error fetching production plan data:', error);
    },
  });
}


















refreshProdPlanList() {
  // this.loading = true;

  // const params = {
  //   page: this.currentPage.toString(),
  //   page_size: this.rows.toString()
  // };

  // this.service.getProductionPlan(params).subscribe((data: any) => {
  //   this.productionPlanList = data.results; // Assuming your API response has a 'results' property
  //   this.totalRecords = data.count;   // Assuming your API response has a 'count' property
  //   this.loading = false;
  // });
}

// onJobSelected(event: Event) {
//   const jobId = (event.target as HTMLSelectElement)?.value;
//   if (jobId) {
//       this.selectedJobId = jobId;
//       this.refreshProdPlanListForSelectedJob();
//   }
// }



  ngOnInit(): void {
    this.refreshProdPlanList();
    this.loadOpenjobList();
  }

  addClick(){
    this.prodplan={
      ProductionPlanId:0,
      ProductionPlanName:""
    }
    this.ModalTitle="Add Production Plan";
    this.ActivateAddEditProdPlanComp=true;
  }

  editClick(item: any){
    this.prodplan=item;
    this.ModalTitle="Edit Production Plan";
    this.ActivateAddEditProdPlanComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteProductionPlanning(item.ProductionPlanId).subscribe(data=>{
        alert(data.toString());
        this.refreshProdPlanList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProdPlanComp=false;
    this.refreshProdPlanList();
  }


  loadOpenjobList() {
    this.service.getAllOpenJobWork().subscribe((data: any) => {
      this.openJobList = data;
    });
  }




  filterData(){
    var searchText = this.searchText.toLowerCase();

    this.productionPlanList = this.ProductionPlanListWithoutFilter.filter(function (el: any) {
      return el.EmployeeId.toString().toLowerCase().includes(searchText) ||
             el.productId.toString().toLowerCase().includes(searchText) ||
             el.drawingNo.toString().toLowerCase().includes(searchText) ||
            el.entrycustomer.toString().toLowerCase().includes(searchText) ||
            el.entrypono.toString().toLowerCase().includes(searchText) ||
            el.entrybatchno.toString().toLowerCase().includes(searchText) ||
            el.plandate.toString().toLowerCase().includes(searchText) ||
            el.expecteddate.toString().toLowerCase().includes(searchText);
    });
  }


}
