import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./list.component";
import {RouterModule} from "@angular/router";
import {ListService} from "./service/list.service";
import {HttpModule} from "@angular/http";
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild([{
      path:'', component:ListComponent

    }])
  ],
  declarations: [ListComponent],
  providers: [ListService],
})
export class ListModule { }
