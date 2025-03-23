import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-section-one',
  standalone:false,
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss'
})
export class SectionOneComponent implements AfterViewInit {
  @ViewChild('note3d') box!: ElementRef;
  @ViewChild('tablet3d') tablet!: ElementRef;

  ngAfterViewInit() {
    // gsap.to(this.box.nativeElement, { x: 200, duration: 2 });
    // let tl = gsap.timeline();
    // tl.to(this.box.nativeElement, { x: 200, duration: 1 })
    // .to(this.box.nativeElement, { y: 100, duration: 1 })
    //   .to(this.box.nativeElement, { rotation: 360, duration: 1 });

      gsap.to(this.box.nativeElement, {
        y: 15,
        ease: "power1.out",
        duration: 1,
        yoyo: true,
        repeat:-1,
      });

      gsap.to(this.tablet.nativeElement, {
        y: 15,
        ease: "power1.out",
        duration: 1,
        yoyo: true,
        repeat:-1,
      });
  }
}
