import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-machine-id',
  templateUrl: './machine-id.component.html',
  styleUrls: ['./machine-id.component.css']
})
export class MachineIdComponent implements OnInit {


  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshMachineList();
  }


  mec:any;
  ActivateAddEditMecComp:boolean=false;

  MachineList:any=[];
  ModalTitle:string="";
  ActivateAddEditMachineComp:boolean=false;
  machine:any;
  // mec:any;

  addClick(){
    this.machine={
      machineId:0,
      machineName:"",
    }
    this.ModalTitle="Add Machine";
    this.ActivateAddEditMecComp=true;
  }

  editClick(item: any){
    this.machine=item;
    this.ModalTitle="Edit Machine";
    this.ActivateAddEditMachineComp=true;
  }

  // deleteClick(item: any){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteMachine(item.MachineId).subscribe(data=>{
  //       alert(data.toString());
  //       this.refreshMachineList();
  //     })
  //   }
  // }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteMachine(item.machineId).subscribe(data => {
        alert(data.toString());
        this.refreshMachineList();
      });
    }
  }



  closeClick(){
    this.ActivateAddEditMachineComp=false;
    this.refreshMachineList();
  }

  refreshMachineList(){
    this.service.getMachineList().subscribe(data=>{
      this.MachineList=data;
    });
  }

  addmachine(){
    var val = {MachineId:this.machine.MachineId,
      MachineName:this.machine.MachineName};
    this.service.addMachine(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatemachine(){
    var val = {MachineId:this.machine.MachineId,
      MachineName:this.machine.MachineName};
    this.service.updateMachine(val).subscribe(res=>{
    alert(res.toString());
    });
  }






}
