import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-pro',
  templateUrl: './add-edit-pro.component.html',
  styleUrls: ['./add-edit-pro.component.css']
})
export class AddEditProComponent {
  constructor(private service:SharedService) { }

  @Input() pro:any;
  id: string='';
  product_Name: string='';

  ngOnInit(): void {
    this.id=this.pro.id;
    this.product_Name=this.pro.product_Name;
  }

  addProduct(){
    var val = {id:this.id,
      product_Name:this.product_Name};
    this.service.addProduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  updateProduct(){
    var val = {id:this.id,
      product_Name:this.product_Name};
    this.service.updateProduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
