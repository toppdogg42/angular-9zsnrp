import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { QlspComponent } from './qlsp/qlsp.component';
const routes: Routes =[
{path: '',component: HomeComponent},
{path: 'home',component: HomeComponent},
{path: 'qlsp',component: QlspComponent},
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes) ],
  exports:[RouterModule],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, SlideComponent, CategoryComponent, HomeComponent, QlspComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
