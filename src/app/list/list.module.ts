import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./list.component";
import {RouterModule} from "@angular/router";
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'', component:ListComponent
    }])
  ],
  declarations: [ListComponent, CountriesComponent]
})
export class ListModule { }
