import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ThemeModuleModule } from '../theme-module/theme-module.module';
import { HomepageComponent } from '../../components/homepage/homepage.component';
import { HeaderComponent } from '../../components/homepage/header/header.component';
import { MainContentComponent } from '../../components/homepage/main-content/main-content.component';
import { SectionOneComponent } from '../../components/homepage/section-one/section-one.component';
import { HomepageServiceComponent } from '../../components/homepage/homepage-service/homepage-service.component';
import { HomepageTestimonialComponent } from '../../components/homepage/homepage-testimonial/homepage-testimonial.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent,

  },
  
];

@NgModule({
  declarations: [HomepageComponent,HeaderComponent,MainContentComponent,SectionOneComponent,HomepageServiceComponent,HomepageTestimonialComponent],
  imports: [
    CommonModule,
    ThemeModuleModule,
   RouterModule.forChild(routes)
    
  ]
})
export class HomepageModule { }
