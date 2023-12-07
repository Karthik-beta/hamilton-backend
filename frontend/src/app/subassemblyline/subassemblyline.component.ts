import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subassemblyline',
  templateUrl: './subassemblyline.component.html',
  styleUrls: ['./subassemblyline.component.css']
})
export class SubassemblylineComponent implements OnInit {

  constructor(private service:SharedService) { }

  subAssemblyLineList:any=[];
  assemblyLineList: any[] = [];

  ModalTitle:string="";
  ActivateAddEditSubAssemblyLineComp:boolean=false;
  subassemblyline:any;

  searchText:string="";
  subAssemblyLineListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshSubAssemblyLineList();
  }

  addClick(){
    this.subassemblyline={
      SubAssemblyLineID:0,
      SubAssemblyLineName:"",
      AssemblyLineID:0
    }
    this.ModalTitle="Add SubAssemblyLine";
    this.ActivateAddEditSubAssemblyLineComp=true;

  }

  editClick(item: any){
    this.subassemblyline=item;
    this.ModalTitle="Edit SubAssemblyLine";
    this.ActivateAddEditSubAssemblyLineComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deletesubAssemblyLine(item.SubAssemblyLineID).subscribe(data=>{
        alert(data.toString());
        this.refreshSubAssemblyLineList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditSubAssemblyLineComp=false;
    this.refreshSubAssemblyLineList();
  }

  getAssemblyLineName(assemblyLineId: number): string {
    const assemblyLine = this.assemblyLineList.find(item => item.assemblylineId === assemblyLineId);
    return assemblyLine ? assemblyLine.assemblylineName : '';
  }

  refreshSubAssemblyLineList() {
    this.service.getsubAssemblyLineList().subscribe(data => {
      this.subAssemblyLineList = data;
      this.subAssemblyLineListWithoutFilter = data;
    });
    this.service.getAssemblyLineList().subscribe(data => {
      this.assemblyLineList = data;
    });
  }




  filterData(){
    var searchText = this.searchText.toLowerCase();

    this.subAssemblyLineList = this.subAssemblyLineListWithoutFilter.filter(function (el: any) {
      return el.subAssemblylineId.toString().toLowerCase().includes(searchText) ||
        el.subAssemblylineName.toString().toLowerCase().includes(searchText);
    });
  }

}
