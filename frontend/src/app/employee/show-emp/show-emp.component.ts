import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  constructor(private service: SharedService) { }

  authenticated: boolean= false; // Define 'authenticated' property
  message: string='';

  EmployeeList: any[] = [];
  EmployeeListWithoutFilter: any[] = [];

  ModalTitle: string = "";
  ActivateAddEditEmpComp: boolean = false;
  emp: any;
  searchText: string = "";

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      Department: "",
      Company: "",
      Designation: "",
      Location: ""
    };
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    console.log(item);
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  showEmployeeDetails: boolean = false;
  selectedEmployee: any;

  viewClick(item: any) {
    this.selectedEmployee = item;
    this.showEmployeeDetails = true;
  }

  deleteClick(item: { EmployeeId: any }) {
    if (confirm('Are you sure??')) {
      this.service.deleteEmployee(item.EmployeeId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList = data;
      this.EmployeeListWithoutFilter = data;
      this.filterData();
    });
  }

  filterData() {
    var searchText = this.searchText.toLowerCase();

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el: any) {
      return (
        el.EmployeeName.toLowerCase().includes(searchText) ||
        el.Department.toLowerCase().includes(searchText) ||
        el.Company.toLowerCase().includes(searchText) ||
        el.Designation.toLowerCase().includes(searchText) ||
        el.Location.toLowerCase().includes(searchText)
      );
    });
  }
}
