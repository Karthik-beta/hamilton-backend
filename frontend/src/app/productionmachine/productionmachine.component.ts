import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-productionmachine',
  templateUrl: './productionmachine.component.html',
  styleUrls: ['./productionmachine.component.css']
})
export class ProductionmachineComponent implements OnInit{

  constructor(private service:SharedService, private cdr: ChangeDetectorRef) { }


  machineWiseDataList: any[] = [];
  selectedMachine: string = '';
  machineList: any=[];
  rows: number = 9;
  currentPage: number = 1;
  totalRecords: number = 0;
  text: string = '';
  results: any[] = [];
  rowsPerPageOptions: number[] = [10, 20, 30];



  ModalTitle:string="";
  ActivateAddEditProductionMachineComp:boolean=false;
  prodmach:any;



  dummyList: any[] = [
    {
       id: 1,
        jobWork: 'JW001',
        employeeId: 'EMP001',
        productId: 'Casseroles',
        drawingNo: 'DRAW001',
        customer: 'CUSTOMER A',
        poNoAndDate: 'TEST',
        batchNo: 'BATCH001',
        orderQuantity: 24000,
        assigned: '30-09-2023',
        expected: '1-11-2023',
        planned: '01-10-2023',
        processing: '',
        completed: '07-10-2023'
    }
  ];

  ngOnInit(): void {
    this.loadMachineWiseData();
    this.onMachineChange();
    this.getMachineList();

    // Set an interval to refresh the machineList every 1 minute
    setInterval(() => {
      this.currentTime = new Date();
      this.onMachineChange();
      this.getMachineList();
      this.cdr.detectChanges();
    }, 15000);
  }

  currentDate: Date = new Date();
  currentTime: Date = new Date();

  getShiftText(): string {
    const currentHour = new Date().getHours();
    let shiftText = '';

    if (currentHour >= 6 && currentHour < 14) {
      shiftText = 'Shift FS : 06:00 to 14:00';
    } else if (currentHour >= 14 && currentHour < 22) {
      shiftText = 'Shift SS : 14:00 to 22:00';
    } else {
      shiftText = 'Shift NS : 22:00 to 06:00';
    }

    return shiftText;
  }


  closeClick(){
    this.ActivateAddEditProductionMachineComp=false;
    this.loadMachineWiseData();
  }

  editClick(dataItem: any){
    this.prodmach=dataItem;
    this.ModalTitle="Edit";
    this.ActivateAddEditProductionMachineComp=true;
  }

  onprodMachAdded() {
    this.loadMachineWiseData();
  }


  loadMachineWiseData() {
    const params = {
      page: this.currentPage.toString(),
      page_size: this.rows.toString(),
    };

    this.service.getMachineWiseData(params).subscribe((data: any) => {
      this.machineWiseDataList = data; // Assuming your API response has a 'results' property

      this.totalRecords = data.count;   // Assuming your API response has a 'count' property
    });
  }

  onMachineChange() {
    const params = {
      machine_id: this.selectedMachine,
    }
    this.service.getMachineWiseData(params).subscribe((data: any) => {
      this.machineWiseDataList = data;
      // this.machineWiseDataList = this.machineWiseDataList.filter((item: any) => item.machine_id === this.selectedMachine);
    });
    // this.machineWiseDataList = this.machineWiseDataList.filter((item: any) => item.machine_id === this.selectedMachine);
  }


  getMachineList() {
    this.service.getMachineList().subscribe((data: any) => {
      this.machineList = data;
    }
    );
  }

  // loadMachineWiseData() {
  //   this.service.getMachineWiseData().subscribe((data: any) => {
  //     this.machineWiseDataList = data;
  //   });
  // }

  getBackgroundColorStyle(performance: number): any {
    let backgroundColor = '';

    if (performance > 90) {
      backgroundColor = 'green';
    } else if (performance >= 80 && performance <= 90) {
      backgroundColor = 'yellow';
    } else if (performance < 80) {
      backgroundColor = 'red';
    }

    return { 'background-color': backgroundColor };
  }




}
