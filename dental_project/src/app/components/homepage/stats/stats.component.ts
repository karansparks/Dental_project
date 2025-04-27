import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeModuleModule } from '../../../@modules/theme-module/theme-module.module';
import { QueryList, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-stats',
  standalone:true,
  imports:[ThemeModuleModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements AfterViewInit {
  @ViewChild('animateSection', { static: true }) animateSection!: ElementRef;
  @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.animateSection.nativeElement, {
        scrollTrigger: {
        trigger: this.animateSection.nativeElement,
        start: 'top 80%',   // when the top of the section reaches 80% of the viewport height
        toggleActions: 'play none none none',  // only play once when entering
      },
      y: 100,               // move from 100px below
      opacity: 0,           // start from invisible
      duration: 1,          // animate for 1 second
      ease: 'power2.out'    // easing
   
    });


    gsap.registerPlugin(ScrollTrigger);

    this.animateItems.forEach((item) => {
      gsap.from(item.nativeElement, {
        scrollTrigger: {
          trigger: item.nativeElement,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    });

    ScrollTrigger.refresh();
  }
}
