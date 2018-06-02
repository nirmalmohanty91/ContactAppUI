import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpTestService{

constructor(private _http:Http){}

getAllUsers(){
        return this._http.get('http://172.31.109.153:8080/contacts').map(res => res.json());
    }


}