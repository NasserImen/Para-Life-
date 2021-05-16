import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddProductsComponent} from './add-products.component'
import { Route, RouterModule, Routes } from '@angular/router';
 export const routes : Routes =[
   {
     path :'',
     component : AddProductsComponent ,  pathMatch: 'full'
   }
 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddProductModule { }
