import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor( private service:SharedService) { }

  ngOnInit(): void {
    this.refreshCustomerList();
  }

  customer:any;
  CustomerList:any=[];
  ModalTitle:string="";
  ActivateAddEditCustomerComp:boolean=false;
  searchText:string="";
  CustomerListWithoutFilter:any=[];
  addClick(){
    this.customer={
      customerId:0,
      customerName:"",
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustomerComp=true;
  }

  editClick(item: any){
    this.customer=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCustomerComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      // this.service.deleteCustomer(item.customerId).subscribe(data=>{
      //   alert(data.toString());
      //   this.refreshCustomerList();
      // })
    }
  }

  closeClick(){
    this.ActivateAddEditCustomerComp=false;
    this.refreshCustomerList();
  }

  refreshCustomerList(){
    // this.service.getCustomerList().subscribe(data=>{
    //   this.CustomerList=data;
    // });
  }

  FilterFn(){
    var CustomerNameFilter = this.CustomerListWithoutFilter.filter(
      (el:any)=>{return el.customerName.toString().toLowerCase().includes(
        this.searchText.toString().toLowerCase()
      )}
    );
    this.CustomerList=CustomerNameFilter;
  }

  sortResult(prop:any,asc:any){
    this.CustomerList = this.CustomerListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }



}
