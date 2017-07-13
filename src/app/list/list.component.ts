import { Component, OnInit } from '@angular/core';
import {ListService} from "./service/list.service";


export interface Continent{
  id:number, name:string
};

export interface Countries{
   id:number, name:string, continent_id:number, language:string
};


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  countries : Countries[] ;
  continents : Continent[];

  constructor(private _countries:ListService, private _continents :ListService) { }


  ngOnInit() :void {
    console.log("hello");
    this._countries.getcountries()
      .subscribe(countries => this.countries = countries);

    this._continents.getcontinents().subscribe(continents => this.continents = continents);


  }

  continent_id : number;
  selectedCountry : Countries;

  public openCountries(continent_id){

    // this.countries = [
    //   {id: 1, name: 'Czech Republic', continent_id:1, language:'Czech'},
    //   {id: 2, name: 'Austria', continent_id:1 , language:'German'},
    //   {id: 3, name: 'Hungry', continent_id:1 , language:'Hungarian'},
    //   {id: 4, name: 'Slovakia', continent_id:1 , language:'Slovak'},
    //   {id: 5, name: 'Germany', continent_id:1 , language:'German'},
    //   {id: 6, name: 'South Korea', continent_id:2 , language:'Korean'},
    //   {id: 7, name: 'China', continent_id:2 , language:'Chinese'},
    //   {id: 8, name: 'Tanzania', continent_id:3 , language:'French'},
    //   {id: 9, name: 'USA', continent_id:4 , language:'English'},
    //   {id: 10, name: 'Peru', continent_id:5, language:'Spanish'},
    //   {id: 11, name: 'Antarctica', continent_id:6 , language:'Local Languange'},
    //   {id: 12, name: 'New Zealand', continent_id:7 , language:'English'}
    // ]
    this.continent_id = continent_id
  }

  // public countryDetail(id){
  //   this.selectedCountry =
  // }

}
