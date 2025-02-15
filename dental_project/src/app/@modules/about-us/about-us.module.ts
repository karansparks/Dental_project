import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: "", component: AboutUsComponent,

  },
  
];
@NgModule({
  
  imports: [
    CommonModule,
 RouterModule.forChild(routes),
 HeaderComponent
  ],
  exports: [RouterModule,HeaderComponent],
})
export class AboutUsModule { }
