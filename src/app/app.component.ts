import { Component, ViewChild, OnInit } from '@angular/core';
import { WjFlexGrid } from 'wijmo/wijmo.angular2.grid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit  {

  @ViewChild('grid') grid: WjFlexGrid;

  data: any[];

  ngOnInit(): void {
    const people = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S'.split(',');
    const minAge = 23, maxAge = 35;
    this.data = [];

    for (let i = 0; i < people.length; i++) {
      this.data.push({
        person: people[i],
        age: Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge,
        salary: Math.floor(Math.random() * 1000),
      });
    }
  }
 }
