import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ThemeModuleModule } from '../theme-module/theme-module.module';  // Added this line
import { HomepageComponent } from '../../components/homepage/homepage.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MainContentComponent } from '../../components/homepage/main-content/main-content.component';
import { SectionOneComponent } from '../../components/homepage/section-one/section-one.component';
import { HomepageServiceComponent } from '../../components/homepage/homepage-service/homepage-service.component';
import { HomepageTestimonialComponent } from '../../components/homepage/homepage-testimonial/homepage-testimonial.component';
import { FooterComponent } from '../../components/footer/footer.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent,

  },
  
];

@NgModule({
  declarations: [HomepageComponent,MainContentComponent,SectionOneComponent,HomepageServiceComponent,HomepageTestimonialComponent],
  imports: [
    CommonModule,
    ThemeModuleModule,
   RouterModule.forChild(routes),
   HeaderComponent
    
  ]
})
export class HomepageModule { }
