import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor( private service:SharedService) { }

  ngOnInit(): void {
    this.refreshSupplierList();
  }

  supplier:any;
  SupplierList:any=[];
  ModalTitle:string="";
  ActivateAddEditSupplierComp:boolean=false;
  searchText:string="";
  SupplierListWithoutFilter:any=[];

  addClick(){
    this.supplier={
      supplierId:0,
      supplierName:"",
      supplierAddress:"",
      supplierPhone:"",
      supplierEmail:"",
    }
    this.ModalTitle="Add Supplier";
    this.ActivateAddEditSupplierComp=true;
  }

  editClick(item: any){
    this.supplier=item;
    this.ModalTitle="Edit Supplier";
    this.ActivateAddEditSupplierComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      // this.service.deleteSupplier(item.supplierId).subscribe(data=>{
      //   alert(data.toString());
      //   this.refreshSupplierList();
      // })
    }
  }

  closeClick(){
    this.ActivateAddEditSupplierComp=false;
    this.refreshSupplierList();
  }

  refreshSupplierList(){
    // this.service.getSupplierList().subscribe(data=>{
    //   this.SupplierList=data;
    //   this.SupplierListWithoutFilter=data;
    // });
  }

  FilterFn(){
    var SupplierNameFilter = this.SupplierListWithoutFilter.filter(
      (el:any)=>{return el.supplierName.toString().toLowerCase().includes(
        this.searchText.toString().toLowerCase()
      )}
    );
    this.SupplierList=SupplierNameFilter;
  }

  sortResult(prop:any,asc:any){
    this.SupplierList = this.SupplierListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }



}
