import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './adminPages/add-products/add-products.component';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import { ListOfProductsComponent } from './adminPages/list-of-products/list-of-products.component'

const routes : Routes = [
{
  path : 'admin' , component :AdminComponent , children : [
    {path : 'addProduct' , component : AddProductsComponent}
  ]
}
]



@NgModule({
  declarations: [AddProductsComponent, ListOfProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
