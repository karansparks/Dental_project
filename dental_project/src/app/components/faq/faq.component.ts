import { Component,inject,signal } from '@angular/core';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-faq',
  imports: [ThemeModuleModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
   servicesData = inject(SharedServiceService);
  tabs = [{
    id:5,
    faq:[ { question: 'Title 1', answer: 'Content 1', value: '0' },
      { question: 'Title 2', answer: 'Content 2', value: '1' },
      { question: 'Title 3', answer: 'Content 3', value: '2' }]
  }
   
];
havingData = signal<boolean>(false);
ngOnInit(){
  this.servicesData.messageFirst.subscribe({
    next: (v:any) =>{
      console.log(`observerA: ${v}`)
      let havingData:any;
      havingData = this.tabs.find((data:any) => data.id === v);
      console.log("havingData",havingData);
      if(havingData){
        this.havingData.set(true);
      }
      
    } 
  });
}
}
