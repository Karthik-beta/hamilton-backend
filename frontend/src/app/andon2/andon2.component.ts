import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Emitters } from 'src/app/emitters/emitters';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-andon2',
  templateUrl: './andon2.component.html',
  styleUrls: ['./andon2.component.css']
})
export class Andon2Component implements OnInit {
  constructor(
    private service: SharedService,
    private http: HttpClient
  ) { }

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

  andonList: any = [];
  AndonList:any=[];
  andonListWithoutFilter: any = [];

  authenticated = false;
  searchText: string = "";

  selectedCategory: string="";
  ModalTitle: string = "";
  ActivateAddEditAndComp: boolean = false;
  and: any;


  ngOnInit(): void {
    this.refreshAndList();
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  addTicket() {
    var currentDate = new Date();
    var localDateTime = currentDate.toLocaleString();

    var val = {
      login: this.login,
      machineId: this.machineId,
      ticket: this.ticket,
      category: this.category,
      sub_category: this.sub_category,
      andon_alerts: localDateTime,
      andon_acknowledge: this.andon_acknowledge || null,
      andon_resolved: this.andon_resolved || null,
    };

    this.service.addAnd(val).subscribe(res => {
      alert(res.toString());
    });
  }


  addClick() {
    this.and = {
      ticket: 1000,
      login: "",
      machineId: "",
      category: "",
      sub_category: "",
      andon_alerts: "",
      andon_acknowledge: "",
      andon_resolved: "",
    };

    this.ModalTitle = "Add Ticket";
    this.ActivateAddEditAndComp = true;
  }



  refreshAndList() {
    this.service.getAndList().subscribe(data => {
      this.andonList = data;
      this.andonListWithoutFilter = data;
      this.filterData();
    });
  }


  filterData() {
    var searchText = this.searchText.toLowerCase();

    this.andonList = this.andonListWithoutFilter.filter(function (el: any) {
      return (
        (el.login && el.login.toString().toLowerCase().includes(searchText)) ||
        (el.machineId && el.machineId.toString().toLowerCase().includes(searchText)) ||
        (el.ticket && el.ticket.toString().toLowerCase().includes(searchText)) ||
        (el.category && el.category.toLowerCase().includes(searchText)) ||
        (el.sub_category && el.sub_category.toLowerCase().includes(searchText)) ||
        (el.andon_alerts && el.andon_alerts.toString().toLowerCase().includes(searchText)) ||
        (el.andon_acknowledge && el.andon_acknowledge.toString().toLowerCase().includes(searchText)) ||
        (el.andon_resolved && el.andon_resolved.toString().toLowerCase().includes(searchText))
      );
    });
  }


}
