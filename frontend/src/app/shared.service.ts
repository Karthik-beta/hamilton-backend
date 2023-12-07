import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
// readonly APIUrl = "https://yfciik-ip-117-192-131-98.tunnelmole.net"


  constructor(private http:HttpClient) { }

  authenticateUser(email: string, name: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}/login/`, {
      email,
      name,
      password
    });
  }

  login(username: string, password: string): Observable<any> {
    const data = {
      username: username,
      password: password
    };
    return this.http.post(`${this.APIUrl}/login/`, data);
  }


  signup(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}/signup/`, {
      email,
      password
    });
  }



    getDepList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/department/');
    }

    addDepartment(val:any){
      return this.http.post(this.APIUrl+'/department/',val);
    }

    updateDepartment(val:any){
      return this.http.put(this.APIUrl+'/department/',val);
    }

    deleteDepartment(id: number){
      return this.http.delete(this.APIUrl+'/department/'+id);
    }

    getEmpList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/employee/');
    }

    addEmployee(val:any){
      return this.http.post(this.APIUrl+'/employee/',val);
    }

    updateEmployee(val:any){
      return this.http.put(this.APIUrl+'/employee/',val);
    }

    deleteEmployee(id: number){
      return this.http.delete(this.APIUrl+'/employee/'+id);
    }

    getCompanyList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/company/');
    }

    addCompany(val:any){
      return this.http.post(this.APIUrl+'/company/',val);
    }

    updateCompany(val:any){
      return this.http.put(this.APIUrl+'/company/',val);
    }

    deleteCompany(id: number){
      return this.http.delete(this.APIUrl+'/company/'+id);
    }

    getDesList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/designation/');
    }

    addDesignation(val:any){
      return this.http.post(this.APIUrl+'/designation/',val);
    }

    updateDesignation(val:any){
      return this.http.put(this.APIUrl+'/designation/',val);
    }

    deleteDesignation(id: number){
      return this.http.delete(this.APIUrl+'/designation/'+id);
    }

    getPlantList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/plant/');
    }

    addPlant(val:any){
      return this.http.post(this.APIUrl+'/plant/',val);
    }

    updatePlant(val:any){
      return this.http.put(this.APIUrl+'/plant/',val);
    }

    deletePlant(id: number){
      return this.http.delete(this.APIUrl+'/location/'+id);
    }

    getAndList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/andon/');
    }

    addAnd(val:any){
      return this.http.post(this.APIUrl+'/andon/',val);
    }

    updateAnd(val:any){
      return this.http.put(this.APIUrl+'/andon/',val);
    }

    deleteAnd(id: number){
      return this.http.delete(this.APIUrl+'/andon/'+id);
    }

    getMachineList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/machine/');
    }

    addMachine(val:any){
      return this.http.post(this.APIUrl+'/machine/',val);
    }

    updateMachine(val:any){
      return this.http.put(this.APIUrl+'/machine/',val);
    }

    deleteMachine(id: number){
      return this.http.delete(this.APIUrl+'/machine/'+id);
    }

    getProductList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/product/');
    }

    addProduct(val:any){
      return this.http.post(this.APIUrl+'/product/',val);
    }

    updateProduct(val:any){
      return this.http.put(this.APIUrl+'/product/',val);
    }

    deleteProduct(id: number){
      return this.http.delete(this.APIUrl+'/product/'+id);
    }

    getBreakdowncategoryList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/breakdownCategory/');
    }

    addBreakdowncategory(val:any){
      return this.http.post(this.APIUrl+'/breakdownCategory/',val);
    }

    updateBreakdowncategory(val:any){
      return this.http.put(this.APIUrl+'/breakdownCategory/',val);
    }

    deleteBreakdowncategory(id: number){
      return this.http.delete(this.APIUrl+'/breakdownCategory/'+id);
    }

    getAssemblyLineList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/assemblyline/');
    }

    addAssemblyLine(val:any){
      return this.http.post(this.APIUrl+'/assemblyline/',val);
    }

    updateAssemblyLine(val:any){
      return this.http.put(this.APIUrl+'/assemblyline/',val);
    }

    deleteAssemblyLine(id: number){
      return this.http.delete(this.APIUrl+'/assemblyline/'+id);
    }

    getShopFloorList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/shopfloor/');
    }

    addShopFloor(val:any){
      return this.http.post(this.APIUrl+'/shopfloor/',val);
    }

    updateShopFloor(val:any){
      return this.http.put(this.APIUrl+'/shopfloor/',val);
    }

    deleteShopFloor(id: number){
      return this.http.delete(this.APIUrl+'/shopfloor/'+id);
    }

    getsubBreakdownCategoryList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/subBreakdownCategory/');
    }

    addsubBreakdownCategory(val:any){
      return this.http.post(this.APIUrl+'/subBreakdownCategory/',val);
    }

    updatesubBreakdownCategory(val:any){
      return this.http.put(this.APIUrl+'/subBreakdownCategory/',val);
    }

    deletesubBreakdownCategory(id: number){
      return this.http.delete(this.APIUrl+'/subBreakdownCategory/'+id);
    }

    getsubAssemblyLineList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/subAssemblyLine/');
    }

    addsubAssemblyLine(val:any){
      return this.http.post(this.APIUrl+'/subAssemblyLine/',val);
    }

    updatesubAssemblyLine(val:any){
      return this.http.put(this.APIUrl+'/subAssemblyLine/',val);
    }

    deletesubAssemblyLine(id: number){
      return this.http.delete(this.APIUrl+'/subAssemblyLine/'+id);
    }

    getProductreceipeList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/productReceipe/');
    }

    addProductreceipe(val:any){
      return this.http.post(this.APIUrl+'/productReceipe/',val);
    }

    updateProductreceipe(val:any){
      return this.http.put(this.APIUrl+'/productReceipe/',val);
    }

    deleteProductreceipe(id: number){
      return this.http.delete(this.APIUrl+'/productReceipe/'+id);
    }

    getProductionPlanningList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/productionplanning/');
    }

    addProductionPlanning(val:any){
      return this.http.post(this.APIUrl+'/productionplanning/',val);
    }

    updateProductionPlanning(val:any){
      return this.http.put(this.APIUrl+'/productionplanning/',val);
    }

    deleteProductionPlanning(id: number){
      return this.http.delete(this.APIUrl+'/productionplanning/'+id);
    }


    // getGislogList():Observable<any[]>{
    //   return this.http.get<any[]>(this.APIUrl+'/gislog/');
    // }

    getGislogList(): Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl + 'employee/');
    }

    addGislog(val:any){
      return this.http.post(this.APIUrl+'/gislog/',val);
    }

    updateGislog(val:any){
      return this.http.put(this.APIUrl+'/gislog/',val);
    }

    deleteGislog(id: number){
      return this.http.delete(this.APIUrl+'/gislog/'+id);
    }

    get

    getProcessedGislogList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/processedgislog/');
    }

    addProcessedGislog(val:any){
      return this.http.post(this.APIUrl+'/processedgislog/',val);
    }

    updateProcessedGislog(val:any){
      return this.http.put(this.APIUrl+'/processedgislog/',val);
    }

    deleteProcessedGislog(id: number){
      return this.http.delete(this.APIUrl+'/processedgislog/'+id);
    }







    getAllDepartmentNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/department/');
    }

    getAllEmployeeNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/employee/');
    }

    getAllCompanyNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/company/');
    }

    getAllDesignationNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/designation/');
    }

    getAllLocationNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/location/');
    }

    getAllAndonNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/andon/');
    }

    getAllMachineNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/machine/');
    }

    getAllProductNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/product/');
    }

    getAllBreakdowncategoryNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/breakdownCategory/');
    }

    getAllAssemblyLineNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/assemblyLine/');
    }

    getAllShopFloorNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/shopFloor/');
    }

    getAllsubBreakdownCategoryNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/subBreakdownCategory/');
    }

    getAllsubAssemblyLineNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/subAssemblyLine/');
    }

    getAllProductreceipeNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/productReceipe/');
    }

    getAllProductionPlanningNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/productionplanning/');
    }

    getAllGislogNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/gislog/');
    }

    getAllProcessedGislogNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/processedgislog/');
    }


    getAttendanceStatistics():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/AttendanceStatistics/');
    }

    getemployee_presence():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/employee_presence/');
    }








  // Database Status Check
  getDatabaseStatus():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/check_database_connection/`);
  }






  // Production Andon Service Start

  getProductionPlan(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/productionPlanning/`, { params: httpParams });
  }

  getProductionPlanById(id: number): Observable<any> {
    return this.http.get(`${this.APIUrl}/productionPlanning/${id}/`);
  }

  addProductionPlan(plan: any): Observable<any> {
    return this.http.post(`${this.APIUrl}/productionPlanning/`, plan);
  }

  updateProductionPlan(plan: any): Observable<any> {
    return this.http.put(`${this.APIUrl}/productionPlanning/${plan.id}/`, plan);
  }

  deleteProductionPlan(itemId: number): Observable<any> {
    return this.http.delete(`${this.APIUrl}/productionPlanning/${itemId}/`);
  }

  getLineMachineConfig(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/lineMachineConfig/`, { params: httpParams });
  }

  // Open Job Work from Production Planning
  getAllOpenJobWork(): Observable<any> {
    return this.http.get<any[]>(`${this.APIUrl}/openJobWorks/`);
  }

  // getProdPlanById(id:number): Observable<any> {
  //   return this.http.get<any[]>(`${this.APIUrl}/productionPlanById/${id}`)
  // }

  getProdPlanById(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/productionPlanById/`, { params: httpParams });
  }

  // Line Machine Config Slot Service
  addLineMachineConfigSlot(slot: any): Observable<any> {
    return this.http.post(`${this.APIUrl}/lineMachineSlotConfig/`, slot);
  }

  getLineMachineConfigSlot(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/lineMachineSlotConfig/`, { params: httpParams });
  }

  getMachineWiseData(params: any ): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/machineWiseData/`, { params: httpParams });
  }

  // getMachineWiseData(): Observable<any> {
  //   return this.http.get<any[]>(`${this.APIUrl}/machineWiseData/`);
  // }

  updateMachineWiseData(plan: any): Observable<any> {
    return this.http.put(`${this.APIUrl}/machineWiseData/${plan.id}/`, plan);
  }



  // Breakdown Category Service
  getEmployeeLogs(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/attendance_record/`, { params: httpParams });
  }

  getEmployeeDetails(param:any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, param[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/employeecrud/`, { params: httpParams });
  }

  getCombinedAutocompleteSuggestions(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/autocomplete/?term=${searchTerm}`);
  }


  getEmployeeList(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/employee/`, { params: httpParams });
  }

  getEmployeeDetailsById(employeeId: number): Observable<any> {
    return this.http.get(`${this.APIUrl}/employee/${employeeId}/`);
  }




  downloadEmployeeData(): Observable<any> {
    return this.http.get(`${this.APIUrl}/download_employee_data/`, {
      responseType: 'blob' as 'json', // Set the response type to 'blob' for binary data
    });
  }

  downloadAttendanceData(): Observable<any> {
    return this.http.get(`${this.APIUrl}/download_attendance_data/`, {
      responseType: 'blob' as 'json', // Set the response type to 'blob' for binary data
    });
  }

  getShiftList():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/shift/`);
  }

  // getCompanyList():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.APIUrl}/company/`);
  // }

  // getLocationList():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.APIUrl}/location/`);
  // }

  // getShopfloorList():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.APIUrl}/shopfloor/`);
  // }

  // getAssemblylineList():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.APIUrl}/assemblyline/`);
  // }



  // getAndList():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.APIUrl}/andon/`);
  // }

  // getAndList(params: any): Observable<any> {
  //   let httpParams = new HttpParams();

  //   for (const key in params) {
  //     if (params.hasOwnProperty(key)) {
  //       httpParams = httpParams.append(key, params[key]);
  //     }
  //   }
  //   return this.http.get(`${this.APIUrl}/andon/`, { params: httpParams });
  // }

  downloadAndonData(): Observable<any> {
    return this.http.get(`${this.APIUrl}/export/`, {
      responseType: 'blob' as 'json', // Set the response type to 'blob' for binary data
    });
  }

  getMetricsData():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/metrics/`);
  }

  getShopfloorwiseData():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/shopfloorwise/`);
  }

  getAndonOpenAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/andon_open/`);
  }

  getAndonOpenResettingAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/andon_open_resetting/`);
  }

  getAndonOpenEngineeringAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/andon_open_engineering/`);
  }

  getAndonOpenElectricalAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/andon_open_electrical/`);
  }

  getAndonOpenQualityAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/andon_open_quality/`);
  }

  getAndonOpenMechAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/andon_open_mech/`);
  }

  // Production Andon Continued


  getProductionInfo(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.APIUrl}/productionReport/`, { params: httpParams });
  }


  // Configuration Service
  getBatchList():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/batch/`);
  }

  getPoNoList():Observable<any[]>{
    return this.http.get<any[]>(`${this.APIUrl}/poNo/`);
  }


}
