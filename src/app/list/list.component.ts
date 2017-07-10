import { Component, OnInit } from '@angular/core';


export class Continent{
  constructor( id:number, name:string){
  }
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  continent : Continent = [

    {id: 1, name: 'Europe'},
    {id: 2, name: 'Asia'},
    {id: 3, name: 'Africa'},
    {id: 4, name: 'North America'},
    {id: 5, name: 'South America'},
    {id: 6, name: 'Antarctica'},
    {id: 7, name: 'Australia'},

  ];



}
