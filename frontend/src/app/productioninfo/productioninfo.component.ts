import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'app-productioninfo',
  templateUrl: './productioninfo.component.html',
  styleUrls: ['./productioninfo.component.css']
})
export class ProductioninfoComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshProdInfoList();
  }

  productionInfoist: any[] = [];
  rows: number = 10;
  currentPage: number = 0;
  totalRecords: number = 0;
  text: string = '';
  results: any[] = [];
  rowsPerPageOptions: number[] = [10, 20, 30];
  loading: boolean = false;



  refreshProdInfoList() {
    this.loading = true;

    const params = {
      page: this.currentPage.toString(),
      page_size: this.rows.toString()
    };

    this.service.getProductionInfo(params).subscribe((data: any) => {
      this.productionInfoist = data.results; // Assuming your API response has a 'results' property
      this.totalRecords = data.count;   // Assuming your API response has a 'count' property
      this.loading = false;
    });
  }

  loadLogs(event: TableLazyLoadEvent): void {
    this.loading = true;

    const params: any = {
      page: ((event.first || 0) / (event.rows || 10) + 1).toString(),
      page_size: (event.rows || 10).toString(),
      sortField: event.sortField || '',
      sortOrder: event.sortOrder === 1 ? 'asc' : 'desc',
    };

    this.service.getProductionInfo(params).subscribe((data: any) => {
      this.productionInfoist = data.results;
      this.totalRecords = data.count;
      this.loading = false;
    });
  }

}
