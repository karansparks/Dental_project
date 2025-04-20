import { Component } from '@angular/core';
import { ThemeModuleModule } from '../../../@modules/theme-module/theme-module.module';

@Component({
  selector: 'app-stats',
  standalone:true,
  imports:[ThemeModuleModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

}
