import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryService } from 'src/app/data/service/category.service';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    ProfileComponent,
    CategoryComponent,
  ],
  imports: [SharedModule, MenuRoutingModule],
  providers: [CategoryService],
})
export class MenuModule {}
