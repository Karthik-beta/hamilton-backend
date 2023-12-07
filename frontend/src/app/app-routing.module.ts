import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {CompanyComponent} from './company/company.component';
import {DesignationComponent} from './designation/designation.component';
import {LocationComponent} from './location/location.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AndonhelpComponent } from './andonhelp/andonhelp.component';
import { AndonComponent } from './andon/andon.component';
import { Andon2Component } from './andon2/andon2.component';
import { Andon3Component } from './andon3/andon3.component';
import { AlertComponent } from './alert/alert.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { CategorywiseComponent } from './categorywise/categorywise.component';
import { AnalysislineComponent } from './analysisline/analysisline.component';
import { OeeanalysisComponent } from './oeeanalysis/oeeanalysis.component';
import { Alert2Component } from './alert2/alert2.component';
import { TodoComponent } from './todo/todo.component';
import { AndonbreakdownComponent } from './andonbreakdown/andonbreakdown.component';
import { MachineIdComponent } from './machine-id/machine-id.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { BreakdowncategoryComponent } from './breakdowncategory/breakdowncategory.component';
import { AssemblylineComponent } from './assemblyline/assemblyline.component';
import { ShopfloorComponent } from './shopfloor/shopfloor.component';
import { SubbreakdownComponent } from './subbreakdown/subbreakdown.component';
import { SubassemblylineComponent } from './subassemblyline/subassemblyline.component';
import { ProductreceipeComponent } from './productreceipe/productreceipe.component';
import { ShiftComponent } from './shift/shift.component';
import { SkillComponent } from './skill/skill.component';
import { ProductionplanComponent } from './productionplan/productionplan.component';
import { Prodplan2Component } from './prodplan2/prodplan2.component';
import { LmcComponent } from './lmc/lmc.component';
import { QcComponent } from './qc/qc.component';
import { LmchComponent } from './lmch/lmch.component';
import { QchComponent } from './qch/qch.component';
import { ResourceComponent } from './resource/resource.component';
import { AndonproductionComponent } from './andonproduction/andonproduction.component';
import { ResourcehComponent } from './resourceh/resourceh.component';
import { ShiftstrengthComponent } from './shiftstrength/shiftstrength.component';
import { Employee2Component } from './employee2/employee2.component';
import { ProductionmachineComponent } from './productionmachine/productionmachine.component';
import { ProductionshopfloorwiseComponent } from './productionshopfloorwise/productionshopfloorwise.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DeviceconfigurationComponent } from './deviceconfiguration/deviceconfiguration.component';
import { ApikeyconfigComponent } from './apikeyconfig/apikeyconfig.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { AttendancerulesComponent } from './attendancerules/attendancerules.component';
import { ClarenceComponent } from './clarence/clarence.component';
import { Clarence2Component } from './clarence2/clarence2.component';
import { ClardashComponent } from './clardash/clardash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertreportComponent } from './alertreport/alertreport.component';
import { AlertdailyComponent } from './alertdaily/alertdaily.component';
import { AssemblylineanalysisComponent } from './assemblylineanalysis/assemblylineanalysis.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { ShiftskillComponent } from './shiftskill/shiftskill.component';
import { DailyattendanceComponent } from './dailyattendance/dailyattendance.component';
import { MonthlyinoutComponent } from './monthlyinout/monthlyinout.component';
import { ShopfloorwiseComponent } from './shopfloorwise/shopfloorwise.component';
import { ProductioninfoComponent } from './productioninfo/productioninfo.component';
import { BatchComponent } from './batch/batch.component';
import { PonoComponent } from './pono/pono.component';


const routes: Routes = [
{path: '', redirectTo:'dashboard', pathMatch:'full'},
{path: 'employee', component:EmployeeComponent},
{path: 'department', component:DepartmentComponent},
{path: 'company', component:CompanyComponent},
{path: 'designation', component:DesignationComponent},
{path: 'location', component:LocationComponent},
{path: 'login', component:LoginComponent},
{path: 'signup', component:SignupComponent},
{path: 'admin', component:AdminComponent},
{path: 'home', component:HomeComponent},
{path: 'andon_help', component:AndonhelpComponent},
{path: 'andon', component:AndonComponent},
{path: 'andon2', component:Andon2Component},
{path: 'andon3', component:Andon3Component},
{path: 'alert', component: AlertComponent},
{path: 'bd', component: BreakdownComponent},
{path: 'categorywise', component: CategorywiseComponent},
{path: 'line', component: AnalysislineComponent},
{path: 'oee', component: OeeanalysisComponent},
{path: 'alert2', component: Alert2Component},
{path: 'todo', component: TodoComponent},
{path: 'andonb', component: AndonbreakdownComponent},
{path: 'machine-id', component: MachineIdComponent},
{path: 'product-id', component: ProductIdComponent},
{path: 'bdc', component: BreakdowncategoryComponent},
{path: 'assemblyline', component: AssemblylineComponent},
{path: 'shopfloor', component: ShopfloorComponent},
{path: 'sbdc', component: SubbreakdownComponent},
{path: 'sal', component: SubassemblylineComponent},
{path: 'pr', component: ProductreceipeComponent},
{path: 'shift', component: ShiftComponent},
{path: 'skill', component: SkillComponent},
{path: 'pp', component: ProductionplanComponent},
{path: 'pp2', component: Prodplan2Component},
{path: 'lmc', component: LmcComponent},
{path: 'qc', component: QcComponent},
{path: 'lmch', component: LmchComponent},
{path: 'qch', component: QchComponent},
{path: 'ra', component: ResourceComponent},
{path: 'andonp', component: AndonproductionComponent},
{path: 'rah', component:ResourcehComponent},
{path: 'shift_strength', component:ShiftstrengthComponent},
{path: 'emp2', component:Employee2Component},
{path: 'apm', component:ProductionmachineComponent},
{path: 'aps', component:ProductionshopfloorwiseComponent},
{path: 'att', component:AttendanceComponent},
{path: 'deviceconfig', component:DeviceconfigurationComponent},
{path: 'apikey', component:ApikeyconfigComponent},
{path: 'customer', component:CustomerComponent},
{path: 'supplier', component:SupplierComponent},
{path: 'order', component:PurchaseorderComponent},
{path: 'attrules', component:AttendancerulesComponent},
{path: 'clar', component:ClarenceComponent},
{path: 'clar2', component:Clarence2Component},
{path: 'cd', component:ClardashComponent},
{path: 'dashboard', component:DashboardComponent},
{path: 'alertreport', component:AlertreportComponent},
{path: 'alertdaily', component:AlertdailyComponent},
{path: 'assembly_analysis', component:AssemblylineanalysisComponent},
{path: 'employee_master', component:EmployeemasterComponent},
{path: 'shift_skill', component:ShiftskillComponent},
{path: 'daily_info', component:DailyattendanceComponent},
{path: 'monthly_report', component:MonthlyinoutComponent},
{path: 'shopfloorwise', component:ShopfloorwiseComponent},
{path: 'prodinfo', component:ProductioninfoComponent},
{path: 'batch', component:BatchComponent},
{path: 'pono', component:PonoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
