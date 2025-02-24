import { Component,inject,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module'  // Added this line

@Component({
  selector: 'app-about-us',
   standalone:true,
   imports:[HeaderComponent,ThemeModuleModule],
  templateUrl: './about-us.component.html',  
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
   constructor() { }
  ngOnInit(): void {
     }
}
