import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login-signup',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'menu',
        loadChildren: () =>
          import('src/app/modules/menu/menu.module').then((m) => m.MenuModule),
      },
    ],
  },
  {
    path: 'auth',
    canActivate: [NoAuthGuard],
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('src/app/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // Fallback when no prior routes is matched
  {
    path: '**',
    redirectTo: '/auth/login-signup',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
