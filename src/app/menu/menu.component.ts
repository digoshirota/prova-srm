import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENUS } from '../mock-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menus = MENUS;

  constructor() { }

  ngOnInit() {
  }

}
