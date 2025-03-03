import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-testimonial',
  standalone:false,
  templateUrl: './homepage-testimonial.component.html',
  styleUrl: './homepage-testimonial.component.scss'
})
export class HomepageTestimonialComponent {
  products: any | undefined;

    responsiveOptions: any[] | undefined;
    constructor() {}
    ngOnInit() {

      this.products = [{
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
    },
    {
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
  },{
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
},{
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
}
