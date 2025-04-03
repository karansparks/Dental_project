import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-main-content',
  standalone:false,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
  
})
export class MainContentComponent  implements AfterViewInit  {
  // @ViewChild('scroll_one', { static: true }) image_one!: ElementRef;
  ngAfterViewInit() {}
  //   gsap.to(this.image_one.nativeElement, {
  //    scrollTrigger:{
  //     trigger:"#scroll_one",
  //     start:"top 80%",
  //     markers:true,
  //     toggleActions:"play none none none",
  //    },                               
      
  //     opacity: 0,
  //     duration: 2,
  //   });
  // }
}
