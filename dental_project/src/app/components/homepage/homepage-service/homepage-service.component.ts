import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { ThemeModuleModule } from '../../../@modules/theme-module/theme-module.module';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-homepage-service',
 standalone:true,
 imports:[ThemeModuleModule],
  templateUrl: './homepage-service.component.html',
  styleUrl: './homepage-service.component.scss'
})


export class HomepageServiceComponent implements OnInit {
  products: any;
  @ViewChild('animateSection', { static: true }) animateSection!: ElementRef;
  @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;
  responsiveOptions: any[] | undefined;

  services: any[] = [
    {url:'./services_logo/braces_log.png',name:'BRACES'},
    {url:'./services_logo/dentures.png',name:'DENTURE'},
    {url:'./services_logo/infection.png',name:'INFECTION CONTROL'},
    {url:'./services_logo/whitening.png',name:'WHITENING'},
    {url:'./services_logo/root_canal.png',name:'ROOT CANAL'},
    {url:'./services_logo/dental-implant.png',name:'DENTAL IMPLANT'},
    {url:'./services_logo/removal.png',name:'REMOVAL'},
    {url:'./services_logo/kids.png',name:'KIDS DENTISTRY'},
    {url:'./services_logo/clear.png',name:'CLEAR ALIGNER'}]
  
  constructor() {}

  ngOnInit() {
    this.products = {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }

      this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '575px',
              numVisible: 1,
              numScroll: 1
          }
      ]
  }
  getSeverity(status: string):any {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warn';
        case 'OUTOFSTOCK':
            return 'danger';
    }
}

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

