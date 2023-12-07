import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-qch',
  templateUrl: './qch.component.html',
  styleUrls: ['./qch.component.css']
})
export class QchComponent implements OnInit {



  constructor(private service: SharedService) { }


  ProductionPlanList:any=[];
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
    this.service.getProductionPlanningList().subscribe(data=>{
      this.ProductionPlanList=data;
    });
  }

  filterData(){
    var searchText = this.searchText.toLowerCase();

    this.ProductionPlanList = this.ProductionPlanListWithoutFilter.filter(function (el: any) {
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

