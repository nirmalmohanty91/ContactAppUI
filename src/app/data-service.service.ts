import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Customer } from './cutomer-contact/cutomer-contact.component';


@Injectable()
export class DataServiceService {

  private getAllRecords='http://localhost:8080/getAllContacts';
  private deleteRecord="http://localhost:8080/deleteContact";

  constructor(private httpClient:HttpClient) { }
  
  getAllContacts():Observable<Customer[]>{
        return this.httpClient.get<Customer[]>(this.getAllRecords);
    }

    deleteContact(id:String){
       
        //return this.httpClient.get<String>(this.deleteRecord);
       // return this.httpClient.post<String>(this.deleteRecord);
    }

}
