import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ThemeModuleModule } from '../../../@modules/theme-module/theme-module.module';
import { AppointmentComponent } from '../appointment.component';
import { FooterComponent } from '../../footer/footer.component';
import { FaqComponent } from '../../faq/faq.component';

@Component({
  selector: 'app-thank-screen',
  standalone:true,
imports:[HeaderComponent,ThemeModuleModule],
  templateUrl: './thank-screen.component.html',
  styleUrl: './thank-screen.component.scss'
})
export class ThankScreenComponent {
  @Output() messageToParent = new EventEmitter<string>();
  goToHome(){
    this.messageToParent.emit('home');
  }
}
