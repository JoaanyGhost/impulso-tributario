import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./presentation/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadComponent: () => import('./presentation/auth/auth.component').then(m => m.AuthComponent)
  },
   {
    path: 'dashboard',
    loadComponent: () =>
      import('./presentation/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: '**',
    redirectTo: '',pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
