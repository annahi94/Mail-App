import { Component } from '@angular/core';
import { Menu } from './menu';
import { Header } from './header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'app';
  selectedMenu: Menu;
  currentURL: string = '';
  menus: Menu[] = [
    new Menu(0, '/', 'Home', new Header(0, 'Home', '../assets/images/GE-logo.png')),
    new Menu(1, '/healthcare', 'Health Care', new Header(1, 'Health Care', '../assets/images/GE-healthcare.png')),
    new Menu(1, '/area', 'Area', new Header(1, 'Area', '../assets/images/GE-healthcare.png'))
  ]

  constructor() {
    this.currentURL = window.location.pathname;
  }

  ngOnInit() {
    this.setHeader();
  }

  onSelectMenu(menu) {
    this.selectedMenu = menu;
  }

  setHeader(){
    this.menus.forEach(element => {
      if(element.routerLink === this.currentURL){
       this.selectedMenu = element; 
      }
    });
  }
}


