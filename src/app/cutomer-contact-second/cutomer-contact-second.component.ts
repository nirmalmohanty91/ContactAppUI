import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { DataServiceService } from '../data-service.service';
import { TableDataSource, ValidatorService } from 'angular4-material-table';


@Component({
  selector: 'app-cutomer-contact-second',
  templateUrl: './cutomer-contact-second.component.html',
  styleUrls: ['./cutomer-contact-second.component.css']
})
export class CutomerContactSecondComponent implements OnInit {
  displayedColumns = ['id', 'fname', 'lname', 'address','actionsColumn'];
  customers: Customer[];
  isData=true;
  //1st Attempt
  //dataSource= new MatTableDataSource<Customer>(ELEMENT_DATA);
  //2nd Attempt
  //dataSource = new CustomerDataSource(this.dataService);
  //3rd Attempt
  dataSource: TableDataSource<Customer>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dataService: DataServiceService) { 
   
  }

  ngOnInit() {
    this.dataService.getAllContacts().subscribe((data:any)=>{
      this.customers=data;
      this.dataSource=new TableDataSource(data);
      //alert(this.dataSource);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort=this.sort;
    })


  }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

createNew(){
  alert("No Data!");
  this.isData=false;
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
