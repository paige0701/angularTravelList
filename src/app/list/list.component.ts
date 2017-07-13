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
export class ListComponent {
  countries : Countries[] ;
  continents : Continent[];
  continent_id : number;
  selectedCountry : Countries[] ;
  countryid : number;

  constructor(private _countries:ListService, private _continents :ListService) { }

  ngOnInit() :void {
    this._countries.getcountries()
      .subscribe(countries => this.countries = countries);
    this._continents.getcontinents().subscribe(continents => this.continents = continents);

  }

  public openCountries(continent_id){
    this.continent_id = continent_id

  }

  public countryDetail(id){

    this.countryid = id;
    this._countries.getcountries()
      .subscribe(countries => this.selectedCountry = countries);

  }

  // public countryDetail(id){
  //   this.selectedCountry =
  // }

}
