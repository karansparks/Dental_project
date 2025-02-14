import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-service',
 standalone:false,
  templateUrl: './homepage-service.component.html',
  styleUrl: './homepage-service.component.scss'
})


export class HomepageServiceComponent implements OnInit {
  products: any;

  responsiveOptions: any[] | undefined;
  
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


}

