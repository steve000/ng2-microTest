// import { RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { JokesComponent } from './jokes/jokes.component';

// export const appRoutes = [
//     {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full'
//     },
//     {
//         path: 'home',
//         component: HomeComponent
//     },
//     {
//         path: 'jokes',
//         component: JokesComponent
//     },
//     {
//         path: '**',  /* 通配符匹配必须写在最后一个 */
//         component: HomeComponent
//     }
// ];

import { RouterModule, CanLoad, CanActivate } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        data: { preload: true },
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'jokes',
        data: { preload: false },
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
        loadChildren: './jokes/jokes.module#JokesModule'
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];
