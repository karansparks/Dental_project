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
import { AppointmentComponent } from '../../components/appointment/appointment.component';
import { WappComponent } from '../../components/wapp/wapp.component';
import { StatsComponent } from '../../components/homepage/stats/stats.component';
import { ExtraComponent } from '../../components/homepage/extra/extra.component';
import { CollapsibleChatComponent } from '../../components/collapsible-chat/collapsible-chat.component';
import { ChatComponent } from '../../components/chat/chat.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent,

  },
  
];

@NgModule({
  declarations: [HomepageComponent,MainContentComponent,SectionOneComponent,HomepageTestimonialComponent,],
  imports: [
    CommonModule,
    ThemeModuleModule,
   RouterModule.forChild(routes),
   HeaderComponent,
   AppointmentComponent,
   FooterComponent,
   StatsComponent,
   ExtraComponent,
   WappComponent,
   HomepageServiceComponent,
   CollapsibleChatComponent,
   ChatComponent
    
  ]
})
export class HomepageModule { }
