import { Component } from '@angular/core';

@Component({
  selector: 'app-productionshopfloorwise',
  templateUrl: './productionshopfloorwise.component.html',
  styleUrls: ['./productionshopfloorwise.component.css']
})
export class ProductionshopfloorwiseComponent {

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

}
