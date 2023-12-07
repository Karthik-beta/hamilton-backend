import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


interface Company {
  CompanyId: number;
  CompanyName: string;
  CompanyLocation: string;
}



@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId:string="";
  EmployeeName:string="";
  Department:string="";
  Company:string="";
  Designation:string="";
  Location:string="";
  EmployementType:string="";
  EmployeeStatus:string="";
  PhotoFileName:string="";
  PhotoFilePath:string="";


  DepartmentsList:any=[];
  CompaniesList:any=[];
  DesignationsList:any=[];
  LocationsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
    this.loadCompanyList();
    this.loadDesignationList();
    this.loadLocationList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Department=this.emp.Department;
      this.Company=this.emp.Company;
      this.Designation=this.emp.Designation;
      this.Location=this.emp.Location;
      this.EmployementType=this.emp.EmployementType;
      this.EmployeeStatus=this.emp.EmployeeStatus;
    });
  }

  loadCompanyList(){
    this.service.getAllCompanyNames().subscribe((data:any)=>{
      this.CompaniesList=data;
    });
  }

  loadDesignationList(){
    this.service.getAllDesignationNames().subscribe((data:any)=>{
      this.DesignationsList=data;
    });
  }

  loadLocationList(){
    this.service.getAllLocationNames().subscribe((data:any)=>{
      this.LocationsList=data;
    });
  }

  addEmployee(){
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      Company: this.Company,
      Designation: this.Designation,
      Location: this.Location,
      EmployementType: this.EmployementType,
      EmployeeStatus: this.EmployeeStatus
    };

    this.service.addEmployee(val).subscribe((res:any)=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      Company: this.Company,
      Designation: this.Designation,
      Location: this.Location,
      EmployementType: this.EmployementType,
      EmployeeStatus: this.EmployeeStatus
    };

    this.service.updateEmployee(val).subscribe((res:any)=>{
      alert(res.toString());
    });
  }

  onCompanyChange() {
    // Find the selected company object from the CompaniesList array
    const selectedCompany: Company = this.CompaniesList.find(
      (company: Company) => company.CompanyName === this.Company
    );

    // Set the Location variable to the selected company's location
    this.Location = selectedCompany.CompanyLocation;
  }


}
