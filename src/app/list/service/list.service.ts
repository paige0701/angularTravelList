import { Injectable } from '@angular/core';
import {Continent, Countries} from "../list.component";


import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ListService {

  constructor(private _http: Http){}

  getcountries(): Observable<Countries[]> {
    return this._http.get('assets/countries.json')
      .map((response: Response) => <Countries[]> response.json());
  }

  getcontinents(): Observable<Continent[]> {
    return this._http.get('assets/continents.json').map((response: Response) => <Continent[]> response.json());

  }

  getSelectedCountries(id) : Observable<Countries[]> {
    return this._http.get('assets/countries/json?continent_id='+id).map((response: Response) => <Continent[]> response.json());
  }



}
