import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import { ListComponent } from '../list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([ {
      path:'', component: LayoutComponent,
      children : [ { path:'', loadChildren:'app/home/home.module#HomeModule'},
        {path: 'list', loadChildren:'app/list/list.module#ListModule'}]

    }])
  ],

  declarations: [LayoutComponent]
})
export class LayoutModule { }
