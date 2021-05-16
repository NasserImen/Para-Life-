import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import {ListOfProductsComponent} from './list-of-products.component'


@NgModule({
  declarations: [
    ListOfProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListOfProductsModule { }
