import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-lmch',
  templateUrl: './lmch.component.html',
  styleUrls: ['./lmch.component.css']
})
export class LmchComponent implements OnInit {



  constructor(private service: SharedService) { }



    //PrimeNg Table
    lineMachineList: any[] = [];
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

  refreshProdPlanList(){
    this.loading = true;

    const params = {
      page: this.currentPage.toString(),
      page_size: this.rows.toString()
    };

    this.service.getLineMachineConfig(params).subscribe((data: any) => {
      this.lineMachineList = data.results; // Assuming your API response has a 'results' property
      this.totalRecords = data.count;   // Assuming your API response has a 'count' property
      this.loading = false;
    });
  }



}

