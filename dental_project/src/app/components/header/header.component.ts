import { Component,inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,ThemeModuleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    servicesData = inject(SharedServiceService);
  constructor(private router: Router) { }
  items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'About us',
        icon: 'pi pi-star',
        route: '/about-us'
    },
    {
        label: 'Services',
        icon: 'pi pi-search',
        // route:'/services',
        items: [
            {
                label: 'Braces',
                icon: 'pi pi-bolt',
                command: () => {
                    this.router.navigate(['/services']);
                    this.servicesData.messageFirst.next(1);
                
                }
            },
            {
                label: 'Dentures',
                icon: 'pi pi-bolt',
                command: () => {
                    this.router.navigate(['/services']);
                    this.servicesData.messageFirst.next(2);
                
                }
            },

        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]
}
