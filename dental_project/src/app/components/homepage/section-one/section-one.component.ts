import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-section-one',
  standalone:false,
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss',
  styles: [
]
})
export class SectionOneComponent implements AfterViewInit {
  private timeline!: gsap.core.Timeline;
    @ViewChild('animateSection', { static: true }) animateSection!: ElementRef;
    @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;
  @ViewChild('note3d') box!: ElementRef;
  @ViewChild('tablet3d') tablet!: ElementRef;

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

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    if (this.timeline) {
      this.timeline.kill();
    }
}
}
