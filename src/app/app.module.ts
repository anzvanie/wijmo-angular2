import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    WjGridModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
