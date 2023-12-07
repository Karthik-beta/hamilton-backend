import { Component,OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-com',
  templateUrl: './add-edit-com.component.html',
  styleUrls: ['./add-edit-com.component.css']
})
export class AddEditComComponent implements OnInit{
  constructor(private service:SharedService) { }

  @Input() com:any;
  CompanyId:string='';
  CompanyName:string='';
  CompanyLocation:string="";

  ngOnInit(): void {
    this.CompanyId=this.com.CompanyId;
    this.CompanyName=this.com.CompanyName;
    this.CompanyLocation=this.com.CompanyLocation
  }

  addCompany(){
    var val = {CompanyId:this.CompanyId,
               CompanyName:this.CompanyName,
               CompanyLocation:this.CompanyLocation};
    this.service.addCompany(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCompany(){
    var val = {CompanyId:this.CompanyId,
      CompanyName:this.CompanyName,
    CompanyLocation:this.CompanyLocation};
    this.service.updateCompany(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
