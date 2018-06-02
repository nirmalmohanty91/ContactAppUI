import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpTestService } from './http-test.service';

@Component({
    selector: 'testing-rest',
    template: `
    <button (click)="onTestGet()">Test GET Request</button>
    <p>Output:{{getData}}</p>
    `,
    providers: [HttpTestService]
})

export class HTTPTestComponent{
    getData: string;
    postData: string;

    constructor(private _httpService:HttpTestService){}

    onTestGet(){
    this._httpService.getAllUsers().subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
    );
    }
}