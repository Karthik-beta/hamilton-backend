import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {NgIf, JsonPipe} from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { CompanyComponent } from './company/company.component';
import { ShowComComponent } from './company/show-com/show-com.component';
import { AddEditComComponent } from './company/add-edit-com/add-edit-com.component';
import { DesignationComponent } from './designation/designation.component';
import { ShowDesComponent } from './designation/show-des/show-des.component';
import { AddEditDesComponent } from './designation/add-edit-des/add-edit-des.component';
import { LocationComponent } from './location/location.component';
import { AddEditLocComponent } from './location/add-edit-loc/add-edit-loc.component';
import { SharedService } from './shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';


import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ShowLocComponent } from './location/show-loc/show-loc.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AndonhelpComponent } from './andonhelp/andonhelp.component';
import { ShowAndComponent } from './andonhelp/show-and/show-and.component';
import { AddEditAndComponent } from './andonhelp/add-edit-and/add-edit-and.component';
import { AndonComponent } from './andon/andon.component';
import { Andon2Component } from './andon2/andon2.component';
import { Andon3Component } from './andon3/andon3.component';
import { ShowAnd3Component } from './andon3/show-and3/show-and3.component';
import { AddEditAnd3Component } from './andon3/add-edit-and3/add-edit-and3.component';
import { AlertComponent } from './alert/alert.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { CategorywiseComponent } from './categorywise/categorywise.component';
import { AnalysislineComponent } from './analysisline/analysisline.component';
import { OeeanalysisComponent } from './oeeanalysis/oeeanalysis.component';
import { Alert2Component } from './alert2/alert2.component';
import { TodoComponent } from './todo/todo.component';
import { AndonbreakdownComponent } from './andonbreakdown/andonbreakdown.component';
import { MachineIdComponent } from './machine-id/machine-id.component';
import { AddEditMecComponent } from './machine-id/add-edit-mec/add-edit-mec.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { AddEditProComponent } from './product-id/add-edit-pro/add-edit-pro.component';
import { BreakdowncategoryComponent } from './breakdowncategory/breakdowncategory.component';
import { AddEditBdcComponent } from './breakdowncategory/add-edit-bdc/add-edit-bdc.component';
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
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AndonproductionComponent } from './andonproduction/andonproduction.component';
import { AddEditSkillComponent } from './skill/add-edit-skill/add-edit-skill.component';
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
import { ShowAttComponent } from './attendancerules/show-att/show-att.component';
import { AddEditAttComponent } from './attendancerules/add-edit-att/add-edit-att.component';
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
import { AddEditProdplan2Component } from './prodplan2/add-edit-prodplan2/add-edit-prodplan2.component';
import { AddEditProductionmachineComponent } from './productionmachine/add-edit-productionmachine/add-edit-productionmachine.component';
import { ProductioninfoComponent } from './productioninfo/productioninfo.component';
import { BatchComponent } from './batch/batch.component';
import { PonoComponent } from './pono/pono.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CompanyComponent,
    ShowComComponent,
    AddEditComComponent,
    DesignationComponent,
    ShowDesComponent,
    AddEditDesComponent,
    LocationComponent,
    AddEditLocComponent,
    ShowLocComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    AdminComponent,
    HomeComponent,
    AndonhelpComponent,
    ShowAndComponent,
    AddEditAndComponent,
    AndonComponent,
    Andon2Component,
    Andon3Component,
    ShowAnd3Component,
    AddEditAnd3Component,
    AlertComponent,
    BreakdownComponent,
    CategorywiseComponent,
    AnalysislineComponent,
    OeeanalysisComponent,
    Alert2Component,
    TodoComponent,
    AndonbreakdownComponent,
    MachineIdComponent,
    AddEditMecComponent,
    ProductIdComponent,
    AddEditProComponent,
    BreakdowncategoryComponent,
    AddEditBdcComponent,
    AssemblylineComponent,
    ShopfloorComponent,
    SubbreakdownComponent,
    SubassemblylineComponent,
    ProductreceipeComponent,
    ShiftComponent,
    SkillComponent,
    ProductionplanComponent,
    Prodplan2Component,
    LmcComponent,
    QcComponent,
    LmchComponent,
    QchComponent,
    ResourceComponent,
    EmployeeDetailsComponent,
    AndonproductionComponent,
    AddEditSkillComponent,
    ResourcehComponent,
    ShiftstrengthComponent,
    Employee2Component,
    ProductionmachineComponent,
    ProductionshopfloorwiseComponent,
    AttendanceComponent,
    DeviceconfigurationComponent,
    ApikeyconfigComponent,
    CustomerComponent,
    SupplierComponent,
    PurchaseorderComponent,
    AttendancerulesComponent,
    ShowAttComponent,
    AddEditAttComponent,
    ClarenceComponent,
    Clarence2Component,
    ClardashComponent,
    DashboardComponent,
    AlertreportComponent,
    AlertdailyComponent,
    AssemblylineanalysisComponent,
    EmployeemasterComponent,
    ShiftskillComponent,
    DailyattendanceComponent,
    MonthlyinoutComponent,
    ShopfloorwiseComponent,
    AddEditProdplan2Component,
    AddEditProductionmachineComponent,
    ProductioninfoComponent,
    BatchComponent,
    PonoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgIf,
    JsonPipe,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    NgApexchartsModule,
    MatSelectModule,
    NgChartsModule,
    ButtonModule,
    SidebarModule,
    TableModule,
    HttpClientModule,
    PaginatorModule,
    MenuModule,
    ConfirmDialogModule,
    ToastModule,
    SkeletonModule,
    AutoCompleteModule,
    DropdownModule,
    CalendarModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    SharedService,
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
