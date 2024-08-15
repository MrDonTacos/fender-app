import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CardComponent } from './components/card/card.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { CardCardComponent } from './components/card-card/card-card.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Page'
    },
    {
        path: '',
        component: MainLayoutComponent, 
        canActivate: [AuthGuard],
        children: [
            // { path: 'pokemon', loadComponent: () => import('./components/carrousel/carrousel.component').then((c) => c.CarrouselComponent)},
            // { path: 'rick-and-morty', loadComponent: () => import('./components/list-cards/list-cards.component').then((c) => c.ListCardsComponent)},
            // { path: 'rick-vs-pokemon', loadComponent: () => import('./components/card-card/card-card.component').then((c) => c.CardCardComponent)},
            { path: 'pokemon', component: CarrouselComponent},
            { path: 'rick-and-morty', component: ListCardsComponent},
            { path: 'rick-vs-pokemon', component: CardCardComponent},
            { path: 'users', component: UsersGridComponent}
        ]
    }
  ];
