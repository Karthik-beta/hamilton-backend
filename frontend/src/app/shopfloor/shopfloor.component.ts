import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shopfloor',
  templateUrl: './shopfloor.component.html',
  styleUrls: ['./shopfloor.component.css']
})
export class ShopfloorComponent implements OnInit {

  constructor(private service:SharedService) { }

  ShopFloorList:any=[];
  ModalTitle:string="";
  ActivateAddEditShopFloorComp:boolean=false;
  shopfloor:any;

  searchText:string="";
  ShopFloorListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshShopFloorList();
  }

  addClick(){
    this.shopfloor={
      ShopFloorId:0,
      ShopFloorName:""
    }
    this.ModalTitle="Add ShopFloor";
    this.ActivateAddEditShopFloorComp=true;

  }

  editClick(item: any){
    this.shopfloor=item;
    this.ModalTitle="Edit ShopFloor";
    this.ActivateAddEditShopFloorComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteShopFloor(item.ShopFloorId).subscribe(data=>{
        alert(data.toString());
        this.refreshShopFloorList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditShopFloorComp=false;
    this.refreshShopFloorList();
  }

  refreshShopFloorList(){
    this.service.getShopFloorList().subscribe(data=>{
      this.ShopFloorList=data;
    });
  }

  filterData(){
    var searchText = this.searchText.toLowerCase();

    this.ShopFloorList = this.ShopFloorListWithoutFilter.filter(function (el: any) {
      return el.shopfloorId.toString().toLowerCase().includes(searchText) ||
        el.shopfloorName.toString().toLowerCase().includes(searchText);
    });
  }



}
