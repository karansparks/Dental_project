import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-section-one',
  standalone:false,
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss',
  styles: [
    `
        :host {
            @keyframes slidedown-icon {
                0% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(20px);
                }

                100% {
                    transform: translateY(0);
                }
            }

            .slidedown-icon {
                animation: slidedown-icon;
                animation-duration: 3s;
                animation-iteration-count: infinite;
            }

            .box {
                background-image: radial-gradient(var(--primary-300), var(--primary-600));
                border-radius: 50% !important;
                color: var(--primary-color-text);
            }
        }
    `
]
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
