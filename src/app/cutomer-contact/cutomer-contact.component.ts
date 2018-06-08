import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-cutomer-contact',
  templateUrl: './cutomer-contact.component.html',
  styleUrls: ['./cutomer-contact.component.css'],
  providers:[]
})
export class CutomerContactComponent implements OnInit {
  
  displayedColumns = ['id', 'fname', 'lname', 'address','actionsColumn'];
  customers: Customer[];
  //1st Attempt
  //dataSource= new MatTableDataSource<Customer>(ELEMENT_DATA);
  //2nd Attempt
  //dataSource = new CustomerDataSource(this.dataService);
  //3rd Attempt
  dataSource: MatTableDataSource<Customer>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dataService: DataServiceService) { 
   
  }

  ngOnInit() {
    this.dataService.getAllContacts().subscribe((data:any)=>{
      this.customers=data;
      this.dataSource=new MatTableDataSource<Customer>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    })


  }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

createNew(){
  alert("Implement logic to add new row.");
}

updateRow(){
  alert("Implement logic to update an existing row");
}

deleteRow(){
  alert("Implement logic to delete a row");
}

}

export interface Customer {
   position: number;
  id: string;
  fname: string;
  lname: string;
  address:string;
 
}
//1st attempt without connecting to db
// const ELEMENT_DATA: Customer[] = [
//   {position: 1, id: 'Hydrogen', fname: 'Nirmal', lname: 'H',address:'Home'},
  
// ];

//2nd attempt creating separate class that extends DataSource
// export class CustomerDataSource extends DataSource<any> {
  
//   constructor(private dataService: DataServiceService) {
//     super();
//   }
//   connect(): Observable<Customer[]> {
//     return this.dataService.getAllContacts();
//   }
  

//   disconnect() {}
// }