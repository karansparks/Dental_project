import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./@modules/homepage/homepage.module').then((m) => m.HomepageModule)
        // loadComponent : ()=> import('./components/about-us/about-us.component').then((m) => m.AboutUsComponent)
    },
    {
        path: 'about-us',
        loadChildren: () => import('./@modules/about-us/about-us.module').then((m) => m.AboutUsModule)
    },
];
