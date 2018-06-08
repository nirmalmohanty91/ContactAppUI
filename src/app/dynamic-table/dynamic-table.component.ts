import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  customers: Customer[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {

    this.dataService.getAllContacts().subscribe((data:any)=>{
      this.customers=data;})
  }
header = [
    {text: 'ID', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'First Name', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Last Name', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Address', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Action', cols: 1, rows: 1, color: 'lightblue'}

  ];
  

}

export interface Customer {
 
  position: number;
  id: string;
  fname: string;
  lname: string;
  address:string;
  isEdit:String;
}
