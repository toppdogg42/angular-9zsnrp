import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QlspComponent } from './qlsp/qlsp.component';
const routes: Routes =[
{path: '',component: HomeComponent},
{path: 'home',component: HomeComponent},
{path: 'qlsp',component: QlspComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
