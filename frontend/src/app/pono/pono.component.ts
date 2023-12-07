import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-pono',
  templateUrl: './pono.component.html',
  styleUrls: ['./pono.component.css']
})
export class PonoComponent implements OnInit{

  constructor(private service:SharedService) { }


  ngOnInit(): void {
    this.refreshPoNOList();
  }

  poNoList:any=[];
  ModalTitle:string="";
  ActivateAddEditProComp:boolean=false;
  product:any;

  ProductListWithoutFilter:any=[];
  searchText:string="";
  pro:any;


  addClick(){
    this.product={
      id:0,
      product_Name:"",
    }
    this.ModalTitle="Add Product";
    this.ActivateAddEditProComp=true;
  }

  editClick(item: any){
    this.product=item;
    this.ModalTitle="Edit Product";
    this.ActivateAddEditProComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteProduct(item.productId).subscribe(data=>{
        alert(data.toString());
        this.refreshPoNOList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProComp=false;
    this.refreshPoNOList();
  }

  refreshPoNOList(){
    this.service.getPoNoList().subscribe(data=>{
      this.poNoList=data;
    });
  }
}
