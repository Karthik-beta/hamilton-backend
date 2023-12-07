import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-des',
  templateUrl: './show-des.component.html',
  styleUrls: ['./show-des.component.css']
})
export class ShowDesComponent implements OnInit{

  constructor(private service:SharedService) { }

  DesignationList:any=[];

  ModalTitle:string="";
  ActivateAddEditDesComp:boolean=false;
  des:any;

  DesignationIdFilter:string="";
  DesignationNameFilter:string="";
  DesignationListWithoutFilter:any=[];
  searchText: string = '';

  ngOnInit(): void {
    this.refreshDesList();
  }

  addClick(){
    this.des={
      DesignationId: 0,
      DesignationName:""
    }
    this.ModalTitle="Add Designation";
    this.ActivateAddEditDesComp=true;

  }

  editClick(item: any){
    this.des=item;
    this.ModalTitle="Edit Designation";
    this.ActivateAddEditDesComp=true;
  }

  deleteClick(item: {DesignationId: any;}){
    if(confirm('Are you sure??')){
      this.service.deleteDesignation(item.DesignationId).subscribe((data: any) => {
        alert(data.toString());
        this.refreshDesList();
      })
    }
  }



  closeClick(){
    this.ActivateAddEditDesComp=false;
    this.refreshDesList();
  }


  refreshDesList(){
    this.service.getDesList().subscribe(data=>{
      this.DesignationList=data;
      this.DesignationListWithoutFilter=data;
    });
  }

  filterData() {
    var searchText = this.searchText.toLowerCase();

    this.DesignationList = this.DesignationListWithoutFilter.filter(function (el: any) {
      return el.DesignationId.toString().toLowerCase().includes(searchText) ||
        el.DesignationName.toString().toLowerCase().includes(searchText);
    });
  }

  sortResult(prop: string, asc: boolean) {
    this.DesignationList = this.DesignationListWithoutFilter.sort(function(a: any, b: any) {
      if (asc) {
        if (prop === 'DesignationId') {
          return a[prop] > b[prop] ? 1 : (a[prop] < b[prop] ? -1 : 0);
        } else if (prop === 'DesignationName') {
          return a[prop].localeCompare(b[prop]);
        }
      } else {
        if (prop === 'DesignationId') {
          return b[prop] > a[prop] ? 1 : (b[prop] < a[prop] ? -1 : 0);
        } else if (prop === 'DesignationName') {
          return b[prop].localeCompare(a[prop]);
        }
      }
    });

    const sortOrder = asc ? 'ascending' : 'descending';
    const propertyName = prop === 'DesignationId' ? 'ID' : 'Name';
    const message = `Sorted by ${propertyName} in ${sortOrder} order.`;
    alert(message);
  }

}
