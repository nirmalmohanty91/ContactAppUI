import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
    selector: 'contact-app',
    templateUrl: './contactApp.html'
})

export class ContactApp implements OnInit{
    fname: string;
    lname: string;
    address: string;
     ngOnInit():any{
        this.fname="Nirmal";
        this.lname="Mohanty";
        this.address="westeros";
        
     }

//http://172.31.109.159:8080/contacts

}