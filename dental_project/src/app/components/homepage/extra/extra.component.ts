import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ThemeModuleModule } from '../../../@modules/theme-module/theme-module.module';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-extra',
    standalone:true,
    imports:[ThemeModuleModule],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.scss'
})
export class ExtraComponent implements AfterViewInit{
  @ViewChild('animateSection', { static: true }) animateSection!: ElementRef;
  @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    gsap.from(this.animateSection.nativeElement, {
      scrollTrigger: {
        trigger: this.animateSection.nativeElement,
        start: 'top 80%', // when the top of the section hits 80% of viewport
        toggleActions: 'play none none none', // play animation on scroll
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });

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
