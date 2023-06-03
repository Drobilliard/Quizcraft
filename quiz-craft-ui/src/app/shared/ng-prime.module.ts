import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [
    MessagesModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    ToastModule,
    CardModule,
  ],
  exports: [
    MessagesModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    ToastModule,
    CardModule,
  ],
})
export class NgPrimeModule {}
