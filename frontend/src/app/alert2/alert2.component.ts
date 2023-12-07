import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-alert2',
  templateUrl: './alert2.component.html',
  styleUrls: ['./alert2.component.css']
})
export class Alert2Component implements OnInit{

  constructor(
    private service: SharedService
  ) { }

  andonList: any[] = [];

  ngOnInit(): void {
    this.refreshAndList();
  }


  refreshAndList() {
    this.service.getAndList().subscribe(data => {
      this.andonList = data;
    });
  }

}
