import { Component, OnInit } from '@angular/core';


export class Continent{
  constructor( id:number, name:string){
  }
}
export class Countries{
  constructor( id:number, name:string, continent_id:number){
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
  countries : Countries ;
  continent_id : number;

  public openCountries(continent_id){

    this.countries = [
      {id: 1, name: 'Czech Republic', continent_id:1},
      {id: 2, name: 'Austria', continent_id:1},
      {id: 3, name: 'Hungry', continent_id:1},
      {id: 4, name: 'Slovakia', continent_id:1},
      {id: 5, name: 'Germany', continent_id:1},
      {id: 6, name: 'South Korea', continent_id:2},
      {id: 7, name: 'China', continent_id:2},
      {id: 8, name: 'Tanzania', continent_id:3},
      {id: 9, name: 'USA', continent_id:4},
      {id: 10, name: 'Peru', continent_id:5},
      {id: 11, name: 'Antarctica', continent_id:6},
      {id: 12, name: 'New Zealand', continent_id:7}
    ]
    this.continent_id = continent_id
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
