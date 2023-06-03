import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { AuthFacade } from 'src/app/core/store/auth.facade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        icon: 'pi-th-large',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: 'dashboard',
          },
          {
            label: 'Profile',
            icon: 'pi pi-user',
            routerLink: 'profile',
          },
        ],
      },
      {
        label: 'Practice',
        items: [
          {
            label: 'Category',
            icon: 'pi pi-plus-circle',
            routerLink: 'category',
          },
          {
            label: 'Quiz',
            icon: 'pi pi-question-circle',
            routerLink: 'quiz',
          },
        ],
      },
      {
        label: 'Settings',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              this.authFacade.logout();
            },
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.delete();
            },
          },
        ],
      },
    ];
  }
  update() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Data Deleted',
    });
  }
  constructor(
    private messageService: MessageService,
    private authFacade: AuthFacade
  ) {}
}
