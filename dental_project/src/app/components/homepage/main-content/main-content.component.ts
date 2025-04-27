import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-main-content',
  standalone:false,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
  
})
export class MainContentComponent  implements AfterViewInit,OnInit {
  @Input() book = 'book';
  @ViewChild('animateSection', { static: true }) animateSection!: ElementRef;
  @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;
  scrollToAppointment() {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
  private timeline!: gsap.core.Timeline;
  // @ViewChild('scroll_one', { static: true }) image_one!: ElementRef;
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
    this.triggerGSAPAnimation();
  }

  ngOnInit() {
    this.triggerGSAPAnimation();
    console.log("working");;
  }

  private triggerGSAPAnimation(): void {
    gsap.from('.homepage-content', { opacity: 0, y: 50, duration: 1 });
  }
  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    if (this.timeline) {
      this.timeline.kill();
    }
}
  }

  
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

