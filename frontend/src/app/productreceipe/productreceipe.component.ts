import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-productreceipe',
  templateUrl: './productreceipe.component.html',
  styleUrls: ['./productreceipe.component.css']
})
export class ProductreceipeComponent implements OnInit {


  constructor(private service:SharedService) { }

  productreceipeList:any=[];
  productreceipeListWithoutFilter:any=[];
  ModalTitle:string="";
  ActivateAddEditProductreceipeComp:boolean=false;
  productreceipe:any;


  searchText:string="";


  ngOnInit(): void {
    this.refreshProductreceipeList();
  }

  addClick(){
    this.productreceipe={
      ProductReceipeID:0,
      ProductReceipeName:""
    }
    this.ModalTitle="Add Product Receipe";
    this.ActivateAddEditProductreceipeComp=true;

  }


  editClick(item: any){
    this.productreceipe=item;
    this.ModalTitle="Edit Product Receipe";
    this.ActivateAddEditProductreceipeComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteProductreceipe(item.ProductReceipeID).subscribe(data=>{
        alert(data.toString());
        this.refreshProductreceipeList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProductreceipeComp=false;
    this.refreshProductreceipeList();
  }


  refreshProductreceipeList(){
    this.service.getProductreceipeList().subscribe(data=>{
      this.productreceipeList=data;
    });
  }


  filterData() {
    var searchText = this.searchText.toLowerCase();

    this.productreceipeList = this.productreceipeListWithoutFilter.filter(function (el: any) {
      return el.productId.toString().toLowerCase().includes(searchText) ||
        el.DesignationName.toString().toLowerCase().includes(searchText);
    });
  }



}
