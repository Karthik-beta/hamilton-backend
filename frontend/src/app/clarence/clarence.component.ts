import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};


@Component({
  selector: 'app-clarence',
  templateUrl: './clarence.component.html',
  styleUrls: ['./clarence.component.css']
})
export class ClarenceComponent implements OnInit, AfterViewInit {

  constructor(private service: SharedService, private _liveAnnouncer: LiveAnnouncer) { }


  GislogList: any[] = [];
  ClarenceListWithoutFilter: any[] = [];
  ModalTitle: string = "";
  ActivateAddEditGislogComp: boolean = false;
  Gislog: any;

  displayedColumns: string[] = [
    'id',
    'employeeid',
    'logdate',
    'direction',
    'shortname',
    'serialno',
    'first_logtime',
    'last_logtime',
    'total_time',
  ];


  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort; // Bind MatSort

  ClarenceIdFilter: string = "";
  ClarenceNameFilter: string = "";
  searchText: string = '';

  selectedDate: string | undefined;

  ngOnInit(): void {
    this.refreshGislogList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


// Modify applyFilter function
applyFilter(event?: Event | string): void {
  const filterValue = (event instanceof Event) ? (event.target as HTMLInputElement).value : (event || '').trim().toLowerCase();

  // Apply text filter
  let filteredData = this.GislogList.filter(item => {
    return item.logdate === this.selectedDate || !this.selectedDate; // If no date is selected, don't filter by date
  });

  // Apply selected Short Name filter
  if (this.selectedShortName) {
    filteredData = filteredData.filter(item => {
      return item.shortname === this.selectedShortName;
    });
  }

  // Apply text filter
  filteredData = filteredData.filter(item => {
    return item.employeeid.toString().toLowerCase().includes(filterValue)
      || item.logdate.includes(filterValue)
      || item.direction.toString().toLowerCase().includes(filterValue)
      || item.shortname.toString().toLowerCase().includes(filterValue)
      || item.serialno.toString().toLowerCase().includes(filterValue)
      || item.first_logtime.includes(filterValue)
      || item.last_logtime.includes(filterValue)
      || item.total_time.includes(filterValue);
  });

  this.dataSource.data = filteredData;
}


  onDateChange(event: any): void {
    this.selectedDate = event.target.value;
    this.applyFilter();
  }

  addClick() {
    this.Gislog = {
      ClarenceId: 0,
      ClarenceName: ""
    }
    this.ModalTitle = "Add Clarence";
    this.ActivateAddEditGislogComp = true;
  }

  editClick(item: any) {
    this.Gislog = item;
    this.ModalTitle = "Edit Clarence";
    this.ActivateAddEditGislogComp = true;
  }

  deleteClick(item: { ClarenceId: any; }) {
    if (confirm('Are you sure??')) {
      this.service.deleteGislog(item.ClarenceId).subscribe((data: any) => {
        alert(data.toString());
        this.refreshGislogList();
      })
    }
  }

  refreshGislogList() {
    // this.service.getProcessedGislogList().subscribe(data => {
    //   this.GislogList = data;
    //   this.ClarenceListWithoutFilter = data;

    //   this.dataSource = new MatTableDataSource(this.GislogList);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;


    //   this.announceSortChange(this.sort);
    // });
  }







  announceSortChange(sort: MatSort) {
    // if (sort.direction) {
    //   this._liveAnnouncer.announce(`Sorted ${sort.direction}ending`);
    // } else {
    //   this._liveAnnouncer.announce('Sorting cleared');
    // }
  }



  FilterFn() {
    var ClarenceIdFilter = this.ClarenceIdFilter;
    var ClarenceNameFilter = this.ClarenceNameFilter;

    this.GislogList = this.ClarenceListWithoutFilter.filter(function (el: {
      ClarenceId: { toString: () => string; };
      ClarenceName: { toString: () => string; };
    }) {
      return el.ClarenceId.toString().toLowerCase().includes(
        ClarenceIdFilter.toString().trim().toLowerCase()
      ) &&
        el.ClarenceName.toString().toLowerCase().includes(
          ClarenceNameFilter.toString().trim().toLowerCase()
        );
    });
  }


  // Short Name filter variable
  selectedShortName: string | undefined;

  // Handle Short Name filter change
  onShortNameFilterChange(event: any): void {
    this.selectedShortName = event.target.value;
    this.applyFilter();
  }



}
