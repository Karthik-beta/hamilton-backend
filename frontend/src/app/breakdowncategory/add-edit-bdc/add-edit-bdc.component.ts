import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-bdc',
  templateUrl: './add-edit-bdc.component.html',
  styleUrls: ['./add-edit-bdc.component.css']
})
export class AddEditBdcComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() bdc:any;
  breakdownCategoryId:string='';
  breakdownCategoryName:string='';

  ngOnInit(): void {
    this.breakdownCategoryId=this.bdc.breakdownCategoryId;
    this.breakdownCategoryName=this.bdc.breakdownCategoryName;
  }

  addBreakdowncategory(){
    var val = {breakdownCategoryId:this.breakdownCategoryId,
      breakdownCategoryName:this.breakdownCategoryName};
    this.service.addBreakdowncategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  updateBreakdowncategory(){
    var val = {breakdownCategoryId:this.breakdownCategoryId,
      breakdownCategoryName:this.breakdownCategoryName};
    this.service.updateBreakdowncategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
