import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { HomeComponent } from './home/home.component';
import { AddBrandComponent } from './brand/add-brand/add-brand.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'brand', 
    children: [
      { path: '', component: BrandComponent },
      { path: 'add', component: AddBrandComponent }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
