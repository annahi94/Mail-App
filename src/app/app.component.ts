import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  selectedMenu: Menu;

  menus: Menu[] = [
    {
      id: 0,
      routerLink: '/',
      title: 'Home'
    },
    {
      id: 1,
      routerLink: '/healthcare',
      title: 'Health Care'
    },
    {
      id: 2,
      routerLink: '/area',
      title: 'Área'
    }
  ]

  onSelectMenu(menu) {
    this.selectedMenu = menu;
  }

}


