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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {AppRoutingModule} from './app-routing.module';
import { ProductService } from './service/product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, FormsModule, ],
  exports:[RouterModule],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, SlideComponent, CategoryComponent, HomeComponent, QlspComponent, ProductDetailComponent, ProductAddComponent, ProductEditComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
