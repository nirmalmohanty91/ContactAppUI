import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactApp } from './contactApp/contactApp.component';
import { AppComponent } from './app.component';
import { HTTPTestComponent } from './contactApp/http-test.component';
import { CutomerContactComponent } from './cutomer-contact/cutomer-contact.component';
import { MyImports } from './myImports';
import { DataServiceService } from './data-service.service';
import { CutomerContactSecondComponent } from './cutomer-contact-second/cutomer-contact-second.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactApp,
    HTTPTestComponent,
    CutomerContactComponent,
    CutomerContactSecondComponent
  ],
  imports: [
    BrowserModule,
    MyImports
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
