import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-breakdowncategory',
  templateUrl: './breakdowncategory.component.html',
  styleUrls: ['./breakdowncategory.component.css']
})
export class BreakdowncategoryComponent implements OnInit{

  constructor(private service:SharedService) { }


  ngOnInit(): void {
    this.refreshBreakdownCategoryList();
  }


  bdc:any;
  ActivateAddEditBdcComp:boolean=false;

  BreakdownCategoryList:any=[];
  ModalTitle:string="";
  ActivateAddEditBreakdownCategoryComp:boolean=false;
  breakdowncategory:any;
  // bdc:any;

  BreakdownCategoryListWithoutFilter:any=[];
  searchText:string="";

  addClick(){
    this.breakdowncategory={
      breakdownCategoryId:0,
      breakdownCategoryName:"",
    }
    this.ModalTitle="Add Breakdown Category";
    this.ActivateAddEditBdcComp=true;
  }

  editClick(item: any){
    this.breakdowncategory=item;
    this.ModalTitle="Edit Breakdown Category";
    this.ActivateAddEditBreakdownCategoryComp=true;
  }

  // deleteClick(item: any){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteBreakdownCategory(item.BreakdownCategoryId).subscribe(data=>{
  //       alert(data.toString());
  //       this.refreshBreakdownCategoryList();
  //     })
  //   }
  // }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteBreakdowncategory(item.breakdownCategoryId).subscribe(data => {
        alert(data.toString());
        this.refreshBreakdownCategoryList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditBreakdownCategoryComp=false;
    this.refreshBreakdownCategoryList();
  }

  refreshBreakdownCategoryList(){
    this.service.getBreakdowncategoryList().subscribe(data=>{
      this.BreakdownCategoryList=data;
      this.BreakdownCategoryListWithoutFilter=data;
    });
  }


  filterData(){
    var BreakdownCategoryNameFilter = this.BreakdownCategoryListWithoutFilter.filter((res:any)=>{
      return res.breakdownCategoryName.toLowerCase().match(this.searchText.toLowerCase());
    });
    this.BreakdownCategoryList = BreakdownCategoryNameFilter;
  }


}
