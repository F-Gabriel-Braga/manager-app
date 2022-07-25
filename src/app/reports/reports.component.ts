import { Component } from '@angular/core';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  constructor() { }

  public listReports: string[] = [];

  public listEmpty: boolean = this.listReports.length == 0;

  public addReport(report: string): void {
    this.listReports.push(report);
    this.listEmpty = this.listReports.length == 0;
  }
}
