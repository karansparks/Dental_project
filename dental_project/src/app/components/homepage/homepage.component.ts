import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-homepage',
  standalone:false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements AfterViewInit{
  @ViewChild('box') box!: ElementRef;
  ngAfterViewInit() {
    // gsap.to(this.box.nativeElement, { x: 200, duration: 2 });
    // let tl = gsap.timeline();
    // tl.to(this.box.nativeElement, { x: 200, duration: 1 })
    // .to(this.box.nativeElement, { y: 100, duration: 1 })
    //   .to(this.box.nativeElement, { rotation: 360, duration: 1 });

      gsap.to(this.box.nativeElement, {
        x: 200,
        duration: 2,
        scrollTrigger: {
          trigger: this.box.nativeElement,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
  }
}
