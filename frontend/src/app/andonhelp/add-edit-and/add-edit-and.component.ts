import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-and',
  templateUrl: './add-edit-and.component.html',
  styleUrls: ['./add-edit-and.component.css']
})
export class AddEditAndComponent implements OnInit {



  constructor(private service:SharedService) { }
  @Input() andData:any;
  // and:any;
  login:string="";
  machineId:string="";
  ticket:string="";
  category:string="";
  sub_category:string="";
  andon_alerts:string="";
  andon_acknowledge:string="";
  andon_resolved:string="";


  AndonList:any=[];


  ngOnInit(): void {
    this.loadAndonList();
  }

  loadAndonList() {
    this.service.getAllAndonNames().subscribe((data: any) => {
      this.AndonList = data;


        // this.login = this.and.login;
        this.machineId = this.andData.machineId;
        this.ticket = this.andData.ticket;
        this.category = this.andData.category;
        this.sub_category = this.andData.sub_category;
        // this.andon_alerts = this.and.andon_alerts;
        this.andon_acknowledge = this.andData.andon_acknowledge;
        this.andon_resolved = this.andData.andon_resolved;

    });
  }

  enterCurrentDateTime(field: string) {
    const currentDateTime = new Date().toISOString().slice(0, 16);
    switch (field) {
      case 'andon_alerts':
        this.andon_alerts = currentDateTime;
        break;
      case 'andon_acknowledge':
        this.andon_acknowledge = currentDateTime;
        break;
      case 'andon_resolved':
        this.andon_resolved = currentDateTime;
        break;
    }
  }




  addTicket() {
    var val = {
      login:this.login,
      machineId:this.machineId,
      ticket:this.ticket,
      category:this.category,
      sub_category:this.sub_category,
      andon_alerts:new Date().toISOString().slice(0, 16),
      andon_acknowledge:this.andon_acknowledge || null,
      andon_resolved:this.andon_resolved || null,
    };


    this.service.addAnd(val).subscribe(res=>{
      alert(res.toString());
    });
  }


    updateTicket() {
    var val = {
      Login:this.login,
      MachineId:this.machineId,
      Ticket:this.ticket,
      Category:this.category,
      Sub_Category:this.sub_category,
      Andon_alerts:this.andon_alerts,
      Andon_acknowledge:this.andon_acknowledge || null,
      Andon_resolved:this.andon_resolved || null,
    };


    this.service.updateAnd(val).subscribe((res:any)=>{
      alert(res.toString());
    });
  }






}

