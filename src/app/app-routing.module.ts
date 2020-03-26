import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QlspComponent } from './qlsp/qlsp.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AboutComponent } from './about/about.component';
const routes: Routes =[
{path: '',redirectTo: '/home',pathMatch:'full'},
{path: 'product/:productID',component: ProductDetailComponent},
{path: 'home',component: HomeComponent},
{path: 'qlsp',component: QlspComponent},
{ path: 'about', component: AboutComponent},
{ path: 'qlsp/:id', component: ProductEditComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
