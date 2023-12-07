import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit {

  constructor( private service:SharedService) { }

  ngOnInit(): void {
    this.refreshPurchaseOrderList();
  }

  purchaseOrder:any;
  PurchaseOrderList:any=[];
  ModalTitle:string="";
  ActivateAddEditPurchaseOrderComp:boolean=false;
  searchText:string="";
  PurchaseOrderListWithoutFilter:any=[];

  addClick(){
    this.purchaseOrder={
      purchaseOrderId:0,
      purchaseOrderDate:"",
      purchaseOrderNumber:"",
      supplierId:0,
      supplierName:"",
      purchaseOrderTotal:0,
      purchaseOrderStatus:"",
      purchaseOrderRemarks:"",
    }
    this.ModalTitle="Add Purchase Order";
    this.ActivateAddEditPurchaseOrderComp=true;
  }

  editClick(item: any){
    this.purchaseOrder=item;
    this.ModalTitle="Edit Purchase Order";
    this.ActivateAddEditPurchaseOrderComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      // this.service.deletePurchaseOrder(item.purchaseOrderId).subscribe(data=>{
      //   alert(data.toString());
      //   this.refreshPurchaseOrderList();
      // })
    }
  }

  closeClick(){
    this.ActivateAddEditPurchaseOrderComp=false;
    this.refreshPurchaseOrderList();
  }

  refreshPurchaseOrderList(){
    // this.service.getPurchaseOrderList().subscribe(data=>{
    //   this.PurchaseOrderList=data;
    //   this.PurchaseOrderListWithoutFilter=data;
    // });
  }


}
