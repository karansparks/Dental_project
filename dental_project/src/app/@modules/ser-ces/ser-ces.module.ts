import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServCesComponent } from '../../components/serv-ces/serv-ces.component';



const routes: Routes = [
  {
    path: "", component: ServCesComponent,

  },
  
];
@NgModule({
  imports: [
    CommonModule,
 RouterModule.forChild(routes),
  ],

})
export class SerCesModule { }
