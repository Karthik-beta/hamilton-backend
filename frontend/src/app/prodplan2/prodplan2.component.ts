import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { TableLazyLoadEvent } from 'primeng/table';
import { MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-prodplan2',
  templateUrl: './prodplan2.component.html',
  styleUrls: ['./prodplan2.component.css']
})
export class Prodplan2Component implements OnInit {

  constructor(private service:SharedService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  //PrimeNg Table
  productionPlanList: any[] = [];
  rows: number = 10;
  currentPage: number = 1;
  totalRecords: number = 0;
  text: string = '';
  results: any[] = [];
  rowsPerPageOptions: number[] = [10, 20, 30];
  loading: boolean = false;



  ModalTitle:string="";
  ActivateAddEditProdPlanComp:boolean=false;
  prodplan:any;
  searchText:string="";
  ProductionPlanListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshProdPlanList();
  }

  onProdPlanAdded() {
    this.refreshProdPlanList();
  }

  loadLogs(event: TableLazyLoadEvent): void {
    this.loading = true;

    const params: any = {
      page: ((event.first || 0) / (event.rows || 10) + 1).toString(),
      page_size: (event.rows || 10).toString(),
      sortField: event.sortField || '',
      sortOrder: event.sortOrder === 1 ? 'asc' : 'desc',
    };

    this.service.getProductionPlan(params).subscribe((data: any) => {
      this.productionPlanList = data.results;
      this.totalRecords = data.count;
      this.loading = false;
    });
  }



  addClick(){
    this.prodplan={
      id: null,
      product_id:"",
      customer:"",
      expected_date:"",
      quantity:0,
      planned_date: null,
      batch_no:"",
      processing_date: null,
      completed_date: null,
    }
    this.ModalTitle="Add Production Plan";
    this.ActivateAddEditProdPlanComp=true;
  }

  editClick(item: any){
    this.prodplan=item;
    this.ModalTitle="Edit Production Plan";
    this.ActivateAddEditProdPlanComp=true;
  }

  // deleteClick(item: { id: any }){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteProductionPlanning(item.id).subscribe(data=>{
  //       alert(data.toString());
  //       this.refreshProdPlanList();
  //     })
  //   }
  // }

  onprodPlanAdded() {
    this.refreshProdPlanList();
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  // deleteClick(item: { id: any }) {
  //   // Extract the employee_id from the log object
  //   const itemId = item.id;
  //   console.log('Deleting item with id:', itemId);

  //   // Display the confirmation dialog before proceeding with deletion
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to delete this item?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       // Call the deleteProductionPlan method from the service
  //       this.service.deleteProductionPlan(itemId).subscribe({
  //         next: (response) => {
  //           // Handle success response if needed
  //           // Show success message
  //           this.messageService.add({
  //             severity: 'success',
  //             summary: 'Success',
  //             detail: 'Item has been deleted successfully.'
  //           });

  //           // Load data
  //           this.refreshProdPlanList();
  //         },
  //         error: (error) => {
  //           // Handle error if needed
  //           // Show error message
  //           this.messageService.add({
  //             severity: 'error',
  //             summary: 'Error',
  //             detail: 'Failed to delete Item.'
  //           });
  //         }
  //       });
  //     },
  //     reject: () => {
  //       // User rejected the confirmation, do nothing or handle as needed
  //       this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have Cancelled' });
  //       // console.log('Deletion cancelled by user.');
  //     }
  //   });
  // }


  deleteClick(item: { id: any }) {
    // Extract the employee_id from the log object
    const itemId = item.id;
    console.log('Deleting item with id:', itemId);
    this.service.deleteProductionPlan(itemId).subscribe({
      next: (response) => {
        // Handle success response if needed
        // Show success message


        // Load data
        this.refreshProdPlanList();
      },
      error: (error) => {
        // Handle error if needed
        // Show error message
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to delete Item.'
        });
      }
    });
  }




  closeClick(){
    this.ActivateAddEditProdPlanComp=false;
    this.refreshProdPlanList();
  }

  refreshProdPlanList() {
    this.loading = true;

    const params = {
      page: this.currentPage.toString(),
      page_size: this.rows.toString()
    };

    this.service.getProductionPlan(params).subscribe((data: any) => {
      this.productionPlanList = data.results; // Assuming your API response has a 'results' property
      this.totalRecords = data.count;   // Assuming your API response has a 'count' property
      this.loading = false;
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
