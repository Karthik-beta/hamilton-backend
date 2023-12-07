import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-mec',
  templateUrl: './add-edit-mec.component.html',
  styleUrls: ['./add-edit-mec.component.css']
})
export class AddEditMecComponent implements OnInit{
  constructor(private service:SharedService) { }

  @Input() mec:any;
  MachineId:string='';
  MachineName:string='';

  ngOnInit(): void {
    this.MachineId=this.mec.MachineId;
    this.MachineName=this.mec.MachineName;
  }

  addMachine(){
    var val = {MachineId:this.MachineId,
      MachineName:this.MachineName};
    this.service.addMachine(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateMachine(){
    var val = {MachineId:this.MachineId,
      MachineName:this.MachineName};
    this.service.updateMachine(val).subscribe(res=>{
    alert(res.toString());
    });
  }



}
