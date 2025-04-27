import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ThemeModuleModule } from '../../../@modules/theme-module/theme-module.module';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-homepage-testimonial',
  standalone:false,
  templateUrl: './homepage-testimonial.component.html',
  styleUrl: './homepage-testimonial.component.scss'
})
export class HomepageTestimonialComponent {

  @ViewChild('animateSection', { static: true }) animateSection!: ElementRef;
  @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;
  products: any | undefined;

    responsiveOptions: any[] | undefined;
    constructor() {}
    ngOnInit() {

      this.products = [{
        id: '1000',
        code: 'f230fh0g3',
        name: './test_1.jpeg',
        description: 'Dr. K. Santhosh Kumare is not only highly skilled but also incredibly kind and patient. He explained the entire procedure clearly, which helped me feel relaxed and confident throughout the treatment.',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: './test_2.jpeg',
      description: 'What truly stood out was the personalized care and attention to detail. Dr. Santhosh made sure I was comfortable at every step, and the results of the treatment were fantastic.',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },{
    id: '1000',
    code: 'f230fh0g3',
    name: './test_3.jpeg',
    description: 'By: A Happy Patient of Dr. K. Santhosh Kumar From the moment I stepped into Zen Smile Dental Studio, I knew I was in good hands. The atmosphere was warm, welcoming, and immaculately clean—setting the tone for what turned out to be one of the best dental visits I’ve ever had.',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},{
  id: '1000',
  code: 'f230fh0g3',
  name: './test_3.jpeg',
  description: 'Dr. K. Santhosh Kumare is not just a dentist—he’s an artist in his craft. His calm demeanor, deep knowledge, and attention to every tiny detail made me feel completely at ease. He explained the procedure clearly, listened to my concerns patiently, and ensured I was comfortable throughout. I could truly feel that he cared about my smile as much as I did!',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
}]
     this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 2,
              numScroll: 4
          },
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 4
          },
          {
              breakpoint: '767px',
              numVisible: 2,
              numScroll: 4
          },
          {
              breakpoint: '575px',
              numVisible: 1,
              numScroll: 4
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
      return false;
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
