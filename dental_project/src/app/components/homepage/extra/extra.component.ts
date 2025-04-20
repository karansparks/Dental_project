import { Component } from '@angular/core';
import { ThemeModuleModule } from '../../../@modules/theme-module/theme-module.module';

@Component({
  selector: 'app-extra',
    standalone:true,
    imports:[ThemeModuleModule],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.scss'
})
export class ExtraComponent {

}
