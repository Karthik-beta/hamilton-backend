import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Emitters } from 'src/app/emitters/emitters';
import {HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-and',
  templateUrl: './show-and.component.html',
  styleUrls: ['./show-and.component.css']
})
export class ShowAndComponent implements OnInit {

  constructor(
    private service: SharedService,
    private http: HttpClient) { }

  andonList: any[] = [];
  andonListWithoutFilter: any[] = [];
  authenticated = false;
  username: string = '';
  isLoggedIn: boolean = false;
  and: any;
  searchText: string = "";
  selectedMachineId: string = "";

  @Input() andData: any;
  // and:any;
  login: string = "";
  machineId: string = "";
  ticket: string = "";
  category: string = "";
  sub_category: string = "";
  alert_shift: string = "";
  andon_alerts: string = "";
  andon_acknowledge: string = "";
  andon_resolved: string = "";

  categoryCompleted: boolean = false;
  subCategoryCompleted: boolean = false;
  selectedCategory: string="";






  getShiftText(): string {
    const currentHour = new Date().getHours();
    let shiftText = '';

    if (currentHour >= 6 && currentHour < 14) {
      shiftText = 'Shift FS : 06:00 to 14:00';
      this.alert_shift = 'FS';
    } else if (currentHour >= 14 && currentHour < 22) {
      shiftText = 'Shift SS : 14:00 to 22:00';
      this.alert_shift = 'SS';
    } else {
      shiftText = 'Shift NS : 22:00 to 06:00';
      this.alert_shift = 'NS';
    }

    return shiftText;
  }



  currentTime: Date = new Date();

  ngOnInit(): void {
    this.refreshAndList();
    // Emitters.authEmitter.subscribe((auth: boolean) => {
    //     this.authenticated = auth;
    //   }
    // );
    this.getCurrentTime();
    setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }






  getCurrentTime(): void {
    this.currentTime = new Date();
  }


  // refreshAndList() {
  //   this.service.getAndList().subscribe(data => {
  //     this.andonList = data.map((item: any) => ({
  //       ...item,
  //       category: '',
  //     }));
  //     this.andonListWithoutFilter = this.andonList;
  //     this.filterData();
  //   });
  // }



  refreshAndList() {
    // this.service.getAndList().subscribe(data => {
    //   this.andonList = data;
    //   this.andonListWithoutFilter = data;
    //   this.filterData();
    // });
  }




  readonly APIUrl = "http://127.0.0.1:8000/";



  addAnd() {
    if (this.machineId && this.category && this.sub_category) {


      const newAnd = {
        machineId: this.machineId,
        category: this.category,
        sub_category: this.sub_category,
        andon_alerts: new Date().toISOString().slice(0, 16)
      };

      this.service.addAnd(newAnd).subscribe(() => {
        // Set andonAlertCompleted to true
        this.andonAlertCompleted = true;

        // Set andonAlertTimestamp to the current timestamp
        this.andonAlertTimestamp = new Date();

        // Handle success or any additional actions
        console.log('Andon data added successfully:', newAnd);
      });
    } else {
      console.log('Please select all required fields before submitting.');
    }
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










  deleteAnd(id: number) {
    this.service.deleteAnd(id).subscribe(() => {
      // Handle success or any additional actions
    });
  }

  getAllAndonNames() {
    this.service.getAllAndonNames().subscribe(names => {
      // Handle the response containing all Andon names
    });
  }




    andonAlertCompleted = false;
    andonAcknowledgeCompleted = false;
    andonResolvedCompleted = false;
    andonAlertTimestamp: Date | null = null;
    andonAcknowledgeTimestamp: Date | null = null;
    andonResolvedTimestamp: Date | null = null;

    onAndonAlert(): void {
      this.andonAlertCompleted = true;
      this.andonAlertTimestamp = new Date();
      this.alertStartTime = new Date();
      this.startTimer();
    }

    onAndonAcknowledge(): void {
      this.andonAcknowledgeCompleted = true;
      this.andonAcknowledgeTimestamp = new Date();
    }

    onAndonResolved(): void {
      this.andonResolvedCompleted = true;
      this.andonResolvedTimestamp = new Date();
      this.stopTimer();
    }

    // getFormattedTimestamp(timestamp: Date | null): string {
    //   if (!timestamp) {
    //     return '';
    //   }

    //   return timestamp.toLocaleString();
    // }

    getFormattedTimestamp(timestamp: Date | null): string {
      if (!timestamp) {
        return '';
      }

      const datePipe = new DatePipe('en-US');
      const formattedTimestamp = datePipe.transform(timestamp, 'dd-MM-yyyy HH:mm');

      return formattedTimestamp || ''; // Ensure it returns an empty string if formattedTimestamp is null
    }



    alertStartTime: Date | null = null;
    timerInterval: any;
    counter: string = '00:00';

    startTimer(): void {
      this.timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const startTime = this.alertStartTime?.getTime() || 0;
        const elapsedMilliseconds = currentTime - startTime;
        this.counter = this.formatTotalBreakdownTime(Math.floor(elapsedMilliseconds / 1000));
      }, 1000);
    }

    stopTimer(): void {
      clearInterval(this.timerInterval);
      this.counter = '00:00';
    }


    formatTotalBreakdownTime(time: number): string {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      const formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
      return formattedTime;
    }

    padZero(num: number): string {
      return num.toString().padStart(2, '0');
    }

    calculateTotalMinutes(andonList: any[]): number {
      let totalMinutes = 0;
      for (const dataItem of andonList) {
        const timeParts = dataItem.total_time.split(':');
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        const timeInMinutes = hours * 60 + minutes;
        totalMinutes += timeInMinutes;
      }
      return totalMinutes;
    }


    calculateTotalResettingMinutes(andonList: any[]): number {
      let totalMechanicalMinutes = 0;
      for (const dataItem of andonList) {
        if (dataItem.category === 'RESETTING') {
          const timeParts = dataItem.total_time.split(':');
          const hours = parseInt(timeParts[0], 10);
          const minutes = parseInt(timeParts[1], 10);
          const timeInMinutes = hours * 60 + minutes;
          totalMechanicalMinutes += timeInMinutes;
        }
      }
      return totalMechanicalMinutes;
    }


    calculateTotalEngineeringMinutes(andonList: any[]): number {
      let totalEngineeringMinutes = 0;
      for (const dataItem of andonList) {
        if (dataItem.category === 'ENGINEERING') {
          const timeParts = dataItem.total_time.split(':');
          const hours = parseInt(timeParts[0], 10);
          const minutes = parseInt(timeParts[1], 10);
          const timeInMinutes = hours * 60 + minutes;
          totalEngineeringMinutes += timeInMinutes;
        }
      }
      return totalEngineeringMinutes;
    }


    calculateTotalElectMinutes(andonList: any[]): number {
      let totalElectMinutes = 0;
      for (const dataItem of andonList) {
        if (dataItem.category === 'ELECT MAINT') {
          const timeParts = dataItem.total_time.split(':');
          const hours = parseInt(timeParts[0], 10);
          const minutes = parseInt(timeParts[1], 10);
          const timeInMinutes = hours * 60 + minutes;
          totalElectMinutes += timeInMinutes;
        }
      }
      return totalElectMinutes;
    }

    calculateTotalQualityMinutes(andonList: any[]): number {
      let totalQualityMinutes = 0;
      for (const dataItem of andonList) {
        if (dataItem.category === 'QUALITY') {
          const timeParts = dataItem.total_time.split(':');
          const hours = parseInt(timeParts[0], 10);
          const minutes = parseInt(timeParts[1], 10);
          const timeInMinutes = hours * 60 + minutes;
          totalQualityMinutes += timeInMinutes;
        }
      }
      return totalQualityMinutes;
    }

    calculateTotalMechMinutes(andonList: any[]): number {
      let totalMechMinutes = 0;
      for (const dataItem of andonList) {
        if (dataItem.category === 'MECH MAINT') {
          const timeParts = dataItem.total_time.split(':');
          const hours = parseInt(timeParts[0], 10);
          const minutes = parseInt(timeParts[1], 10);
          const timeInMinutes = hours * 60 + minutes;
          totalMechMinutes += timeInMinutes;
        }
      }
      return totalMechMinutes;
    }

}
