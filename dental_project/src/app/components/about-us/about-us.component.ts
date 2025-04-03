import { Component,inject,OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { gsap } from 'gsap';
import { HeaderComponent } from '../header/header.component';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module'  // Added this line
import { TextPlugin } from 'gsap/TextPlugin';
import { AppointmentComponent } from '../appointment/appointment.component';
import { HomepageServiceComponent } from '../homepage/homepage-service/homepage-service.component';
import { FooterComponent } from '../footer/footer.component';
gsap.registerPlugin(TextPlugin);
@Component({
  selector: 'app-about-us',
   standalone:true,
   imports:[HeaderComponent,ThemeModuleModule,AppointmentComponent,FooterComponent],
  templateUrl: './about-us.component.html',  
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements  AfterViewInit{
  products: any | undefined = [
    
    {
url:'./before.jpeg',
url2:'./after.jpeg'

},

{
url:'./about_us.jpeg',
url2:'./bf3.jpeg'     
},

{
url:'./before.jpeg',
url2:'./after.jpeg'
},

{
 url:'./before.jpeg',
 url2:'./after.jpeg'
}

];
@ViewChild('texts') box!: ElementRef;
@ViewChild('text') texts!: ElementRef;
words = ['I am a Dentitst Doctor,what i can do for you?']
  responsiveOptions: any[] | undefined;
  ngAfterViewInit() {
   
    gsap.to(this.box.nativeElement,{
     
        opacity:0,repeat:-1,
    ease:"power1.out"})
 
    this.words.forEach((word,index)=>{
    console.log(word);
        gsap.timeline().add(gsap.timeline().to(this.texts.nativeElement,{duration:3,text:word,repeat:-1,ease:"power1.out",yoyo:true}));
    })

  }






  constructor() {}

  ngOnInit() {
      // this.productService.getProductsSmall().then((products) => {
      //     this.products = products;
      // });

      this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '575px',
              numVisible: 1,
              numScroll: 1
          }
      ]
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warn';
          case 'OUTOFSTOCK':
              return 'danger';
      }
      return true;
  }
}
