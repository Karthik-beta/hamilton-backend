import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-productionplan',
  templateUrl: './productionplan.component.html',
  styleUrls: ['./productionplan.component.css']
})
export class ProductionplanComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductionPlanList:any=[];
  ModalTitle:string="";
  ActivateAddEditProdPlanComp:boolean=false;
  prodplan:any;

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



}
