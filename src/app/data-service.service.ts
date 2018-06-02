import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Customer } from './cutomer-contact/cutomer-contact.component';


@Injectable()
export class DataServiceService {

  private serviceUrl='http://192.168.2.4:8080/getAllContacts';

  constructor(private httpClient:HttpClient) { }
  
  getAllContacts():Observable<Customer[]>{
        return this.httpClient.get<Customer[]>(this.serviceUrl);
    }

}
