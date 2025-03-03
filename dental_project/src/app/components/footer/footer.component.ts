import { Component } from '@angular/core';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';


@Component({
  selector: 'app-footer',
  standalone:true,
  imports:[ThemeModuleModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
