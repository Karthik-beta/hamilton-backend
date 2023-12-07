import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit{

  constructor(private service:SharedService) { }

  id:string='';
  product_Name:string='';

  ngOnInit(): void {
    this.refreshProductList();
  }

  ProductList:any=[];
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
        this.refreshProductList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProComp=false;
    this.refreshProductList();
  }

  refreshProductList(){
    this.service.getProductList().subscribe(data=>{
      this.ProductList=data;
      console.log(this.ProductList);
    });
  }

  addProduct(){
    var val = {id:this.id,
      product_Name:this.product_Name};
    this.service.addProduct(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateProduct(){
    var val = {id:this.id,
      product_Name:this.product_Name};
    this.service.updateProduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  filterData() {
    var searchText = this.searchText.toLowerCase();

    this.ProductList = this.ProductListWithoutFilter.filter(function (el: any) {
      return el.DesignationId.toString().toLowerCase().includes(searchText) ||
        el.DesignationName.toString().toLowerCase().includes(searchText);
    });
  }




}
