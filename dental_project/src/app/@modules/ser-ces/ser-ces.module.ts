import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServCesComponent } from '../../components/serv-ces/serv-ces.component';
import { AppointmentComponent } from '../../components/appointment/appointment.component';
import { FooterComponent } from '../../components/footer/footer.component';



const routes: Routes = [
  {
    path: "", component: ServCesComponent,

  },
  
];
@NgModule({
  imports: [
    CommonModule,
 RouterModule.forChild(routes),
  AppointmentComponent,
    FooterComponent,
  ],

})
export class SerCesModule { }
