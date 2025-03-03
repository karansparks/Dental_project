import { Component } from '@angular/core';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';

@Component({
  selector: 'app-appointment',
 standalone:true,
   imports:[ThemeModuleModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {

}
