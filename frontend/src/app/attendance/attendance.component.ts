import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {

  data: any[] = this.generateData(18);

  // Function to generate data for the specified number of employees (count)
  generateData(count: number): any[] {
    const data: any[] = [];
    let initialEmployeeId = 223044348; // Initial employee ID

    for (let i = 0; i < count; i++) {
      const row = {
        employeeId: String(initialEmployeeId + i),
        employee_name: String(initialEmployeeId + i),
        date: '7/25/2023',
        time: '6:33:43 AM',
        flag: '1',
        shiftAssigned: '7/15/2023',
        assignedShift: 'A',
        assignedBy: 'SATHISH , 987654321',
      };
      data.push(row);
    }
    return data;
  }

}
