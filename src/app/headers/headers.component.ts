import { Component, Input, OnInit } from '@angular/core';
import { Header } from '../header';
import { Menu } from '../menu';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})


export class HeadersComponent implements OnInit {
  @Input() menu: Menu;


  
  setWidht(menu) {
    
  }

  constructor() {
    
  }

  ngOnInit() {
  }

}
