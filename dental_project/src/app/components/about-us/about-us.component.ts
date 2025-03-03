import { Component,inject,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module'  // Added this line

@Component({
  selector: 'app-about-us',
   standalone:true,
   imports:[HeaderComponent,ThemeModuleModule],
  templateUrl: './about-us.component.html',  
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  products: any | undefined = [{
url:'./bf1.jpeg'
},{
url:'./bf2.jpeg'
},{
url:'./bf3.jpeg'
},{
 url:'./bf1.jpeg'
},{
url:'./bf1.jpeg'
},];

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
      // this.productService.getProductsSmall().then((products) => {
      //     this.products = products;
      // });

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

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warn';
          case 'OUTOFSTOCK':
              return 'danger';
      }
      return true;
  }
}
