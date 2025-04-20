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
   imports:[HeaderComponent,ThemeModuleModule,AppointmentComponent,FooterComponent,HomepageServiceComponent],
    
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
@ViewChild('counter') counter!: ElementRef;
@ViewChild('experience') experience!: ElementRef;
@ViewChild('patient') patient!: ElementRef;

counterObj = { val: 0 };
displayValue1 = '1000';
displayValue2 = '500';
displayValue3 = '200';

words = ['I am a Dentitst Doctor,what i can do for you?']
  responsiveOptions: any[] | undefined;

  ngAfterViewInit() {
    const numberWithCommas = (x: number): string =>
        x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    gsap.from(this.counter.nativeElement, {
        textContent: 0,
        duration: 2,
        ease: 'power1.in',
        snap: { textContent: 1 },
        onUpdate: function () {
            const el = this['targets']()[0]; // <-- This is the fix
            const value = Math.ceil(+el.textContent);
            el.textContent = numberWithCommas(value);
        }
      });
      gsap.from(this.experience.nativeElement, {
        textContent: 0,
        duration: 2,
        ease: 'power1.in',
        snap: { textContent: 1 },
        onUpdate: function () {
            const el = this['targets']()[0]; // <-- This is the fix
            const value = Math.ceil(+el.textContent);
            el.textContent = numberWithCommas(value);
        }
      });
      gsap.from(this.patient.nativeElement, {
        textContent: 0,
        duration: 2,
        ease: 'power1.in',
        snap: { textContent: 1 },
        onUpdate: function () {
            const el = this['targets']()[0]; // <-- This is the fix
            const value = Math.ceil(+el.textContent);
            el.textContent = numberWithCommas(value);
        }
      });
      
      
  
    // gsap.to(this.counterObj, {
    //     textContent: 0,
    //     duration: 4,
    //     ease: "power1.in",
    //     snap: { val: 1 },
    //     stagger: 1,
    //     onUpdate: () => {
    //       this.displayValue = this.counterObj.val.toFixed(0); // Use toFixed(1) for decimal smoothness
    //     },
    //   });

    //   gsap.to(this.counter.nativeElement, {
    //     textContent: 0,
    //     duration: 4,
    //     ease: Power1.easeIn,
    //     snap: { textContent: 1 },
    //     stagger: 1,
    //   });
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
