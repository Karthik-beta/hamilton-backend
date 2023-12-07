import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-loc',
  templateUrl: './add-edit-loc.component.html',
  styleUrls: ['./add-edit-loc.component.css']
})
export class AddEditLocComponent implements OnInit{
  constructor(private service:SharedService) { }

  @Input() loc:any;
  LocationId:string='';
  LocationName:string='';

  ngOnInit(): void {
    this.LocationId=this.loc.LocationId;
    this.LocationName=this.loc.LocationName;
  }

  addLocation(){
    var val = {LocationId:this.LocationId,
      LocationName:this.LocationName};
    this.service.addPlant(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateLocation(){
    var val = {LocationId:this.LocationId,
      LocationName:this.LocationName};
    this.service.updatePlant(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
