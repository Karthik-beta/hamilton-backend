import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  // constructor(private service:SharedService) { }

  // SkillList:any=[];
  // ModalTitle:string="";
  // ActivateAddEditSkillComp:boolean=false;
  // skill:any;

  // SkillIdFilter:string="";
  // SkillNameFilter:string="";
  // SkillListWithoutFilter:any=[];
  // searchText: string = '';


  // ngOnInit(): void {
  //   this.refreshSkillList();
  // }

  // addClick(){
  //   this.skill={
  //     SkillId: 0,
  //     SkillName:""
  //   }
  //   this.ModalTitle="Add Skill";
  //   this.ActivateAddEditSkillComp=true;

  // }

  // editClick(item: any){
  //   this.skill=item;
  //   this.ModalTitle="Edit Skill";
  //   this.ActivateAddEditSkillComp=true;
  // }

  // deleteClick(item: {SkillId: any;}){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteSkill(item.SkillId).subscribe((data: any) => {
  //       alert(data.toString());
  //       this.refreshSkillList();
  //     })
  //   }
  // }




  // closeClick(){
  //   this.ActivateAddEditSkillComp=false;
  //   this.refreshSkillList();
  // }


  // refreshSkillList(){
  //   this.service.getSkillList().subscribe(data=>{
  //     this.SkillList=data;
  //     this.SkillListWithoutFilter=data;
  //   });
  // }


}
