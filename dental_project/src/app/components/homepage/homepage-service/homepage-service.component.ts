import { Component,OnInit } from '@angular/core';
import { ThemeModuleModule } from '../../../@modules/theme-module/theme-module.module';

@Component({
  selector: 'app-homepage-service',
 standalone:true,
 imports:[ThemeModuleModule],
  templateUrl: './homepage-service.component.html',
  styleUrl: './homepage-service.component.scss'
})


export class HomepageServiceComponent implements OnInit {
  products: any;

  responsiveOptions: any[] | undefined;

  services: any[] = [
    {url:'./services_logo/braces_log.png',name:'Dental Care'},
    {url:'./services_logo/dentures.png',name:'dentures'},
    {url:'./services_logo/infection.png',name:'Infectin control'},
    {url:'./services_logo/whitening.png',name:'whitening'},
    {url:'./services_logo/root_canal.png',name:'root_canal'},
    {url:'./services_logo/dental-implant.png',name:'dental-implant'},
    {url:'./services_logo/removal.png',name:'removal'},
    {url:'./services_logo/kids.png',name:'kids'},
    {url:'./services_logo/clear.png',name:'Clear Aligner'}]
  
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

