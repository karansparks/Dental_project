import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ThemeModuleModule } from '../../theme-module/theme-module.module';
import { HeaderComponent } from '../../../components/homepage/header/header.component';
import { HomepageComponent } from '../../../components/homepage/homepage.component';
const routes: Routes = [
  {
    path: "", component: HomepageComponent,

  },
  
];

@NgModule({
  declarations: [HomepageComponent,HeaderComponent],
  imports: [
    CommonModule,
    ThemeModuleModule,
   RouterModule.forChild(routes)
    
  ]
})
export class HeaderModule { 


}
