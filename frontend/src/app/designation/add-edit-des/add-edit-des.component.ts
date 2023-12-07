import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-des',
  templateUrl: './add-edit-des.component.html',
  styleUrls: ['./add-edit-des.component.css']
})
export class AddEditDesComponent implements OnInit{
  constructor(private service:SharedService) { }

  @Input() des:any;
  DesignationId:string='';
  DesignationName:string='';

  ngOnInit(): void {
    this.DesignationId=this.des.DesignationId;
    this.DesignationName=this.des.DesignationName;
  }

  addDesignation(){
    var val = {DesignationId:this.DesignationId,
      DesignationName:this.DesignationName};
    this.service.addDesignation(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDesignation(){
    var val = {DesignationId:this.DesignationId,
      DesignationName:this.DesignationName};
    this.service.updateDesignation(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
