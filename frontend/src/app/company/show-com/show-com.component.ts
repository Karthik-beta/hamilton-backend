import { Component,OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-com',
  templateUrl: './show-com.component.html',
  styleUrls: ['./show-com.component.css']
})
export class ShowComComponent implements OnInit{
  constructor(private service:SharedService) { }

  authenticated: boolean= false; // Define 'authenticated' property
  message: string='';

  CompanyList:any=[];

  ModalTitle:string="";
  ActivateAddEditComComp:boolean=false;
  com:any;

  CompanyIdFilter:string="";
  CompanyNameFilter:string="";
  CompanyLocationFilter:string="";
  CompanyListWithoutFilter:any=[];
  searchText:string="";

  ngOnInit(): void {
    this.refreshComList();
  }

  addClick(){
    this.com={
      CompanyId: 0,
      CompanyName:"",
      CompanyLocation:""
    }
    this.ModalTitle="Add Company";
    this.ActivateAddEditComComp=true;

  }

  editClick(item: any){
    this.com=item;
    this.ModalTitle="Edit Company";
    this.ActivateAddEditComComp=true;
  }

  deleteClick(item: {CompanyId: any;}){
    if(confirm('Are you sure??')){
      this.service.deleteCompany(item.CompanyId).subscribe((data: any) => {
        alert(data.toString());
        this.refreshComList();
      })
    }
  }




  closeClick(){
    this.ActivateAddEditComComp=false;
    this.refreshComList();
  }


  refreshComList(){
    this.service.getCompanyList().subscribe(data=>{
      this.CompanyList=data;
      this.CompanyListWithoutFilter=data;
    });
  }

  filterData() {
    var searchText = this.searchText.toLowerCase();

    this.CompanyList = this.CompanyListWithoutFilter.filter(function (el: any) {
      return el.CompanyId.toString().toLowerCase().includes(searchText) ||
             el.CompanyName.toString().toLowerCase().includes(searchText) ||
             el.CompanyLocation.toString().toLowerCase().includes(searchText);
    });
  }




}
