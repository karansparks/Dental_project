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
url2:'./after.jpeg',
description:'I Recently Had The Pleasure Of Undergoing Denture Treatment At Zen Smile Dental Studio And The Experience Was Beyond Exceptional Dr K Santhosh Kumare And His Team Delivered Perfectly Crafted Dentures That Have Restored Both My Smile And Confidence From The Very Beginning I Was Impressed By The Personalized Care And Attention To Detail The Treatment Was Thorough And Dr Santhosh Ensured That I Was Comfortable Every Step Of The Way I Was Guided Through The Process And My Questions Were Answered With Patience And Professionalism.'

},

{
url:'./about_us.jpeg',
url2:'./bf3.jpeg',
description:'Canine Space Infections Are Typically Caused By An Abscess Or Bacterial Infection That Affects The Tissues Surrounding The Canine Teeth (The Pointed Teeth Located Between The Incisors And Premolars) This Type Of Infection Can Be Painful Causing Swelling Discomfort And Difficulty With Chewing Or Swallowing If Left Untreated It Can Lead To Further Complications Such As Tooth Loss Or The Spread Of Infection To Other Areas Of The Face Or Jaw'    
},

{
url:'./BF2.jpg',
url2:'./BF2.1.jpg',
description:'A Submandibular Space Infection Refers To An Infection That Occurs In The Submandibular Space Which Is Located Beneath The Jaw This Infection Can Result From Conditions Like Dental Abscesses Salivary Gland Infections Or Trauma To The Area The Infection Often Causes Swelling And Pain In The Lower Jaw And Can Sometimes Spread To Other Areas Causing More Severe Complications'
},

{
 url:'./BF3.jpg',
 url2:'./BF3.1.jpg',
 description:'Dental Fillings Are One Of The Most Common Treatments Used To Repair Teeth Affected By Decay Cavities Or Damage The Procedure Involves Cleaning Out The Decayed Or Damaged Portion Of The Tooth And Then Filling It With A Suitable Material To Restore The Tooth’s Function Structure And Appearance'
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
displayValue3 = '100';

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
