import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-assemblyline',
  templateUrl: './assemblyline.component.html',
  styleUrls: ['./assemblyline.component.css']
})
export class AssemblylineComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshAssemblyLineList();
  }


  assemblyline:any;
  AssemblyLineList:any=[];
  ModalTitle:string="";
  ActivateAddEditAssemblyLineComp:boolean=false;
  searchText:string="";
  AssemblyLineListWithoutFilter:any=[];


  addClick(){
    this.assemblyline={
      assemblyLineId:0,
      assemblyLineName:"",
    }
    this.ModalTitle="Add Assembly Line";
    this.ActivateAddEditAssemblyLineComp=true;
  }

  editClick(item: any){
    this.assemblyline=item;
    this.ModalTitle="Edit Assembly Line";
    this.ActivateAddEditAssemblyLineComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteAssemblyLine(item.assemblyLineId).subscribe(data=>{
        alert(data.toString());
        this.refreshAssemblyLineList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditAssemblyLineComp=false;
    this.refreshAssemblyLineList();
  }

  refreshAssemblyLineList(){
    this.service.getAssemblyLineList().subscribe(data=>{
      this.AssemblyLineList=data;
    });
  }


  filterData() {
    var searchText = this.searchText.toLowerCase();

    this.AssemblyLineList = this.AssemblyLineListWithoutFilter.filter(function (el: any) {
      return el.assemblylineId.toString().toLowerCase().includes(searchText) ||
        el.assemblylineName.toString().toLowerCase().includes(searchText);
    });
  }




}
