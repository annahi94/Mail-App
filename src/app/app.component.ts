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
    new Menu('/', 'Home', new Header('Home'), false, null),    
    new Menu(null, 'Catalogs', null, true, [
      new Menu('/area', 'Area', new Header('Area'), false, null)      
    ]),
    new Menu(null, 'Configurations', null, true, [
      new Menu('/conf-provider', 'Provider - XML & PDF', new Header('Provider - XML & PDF'), false, null)
    ]),
    new Menu('/healthcare', 'Health Care', new Header('Health Care'), false, null),
  ]


  constructor() {
    this.currentURL = window.location.pathname;
    console.log(this.menus);
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


