import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../header';
import { Menu } from '../menu';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})


export class HeadersComponent implements OnInit {
  @Input() menu: Menu;

  headers: Header[] = [
    {
      id: 0,
      title: 'General Electric',
      logoPath: '../assets/images/GE-logo.png'
    },
    {
      id: 1,
      title: 'Health Care',
      logoPath: '../assets/images/GE-healthcare.png'
    },
    {
      id: 2,
      title: 'Catálogo de areas',
      logoPath: '../assets/images/GE-healthcare.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
