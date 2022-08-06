import {Component, OnInit} from '@angular/core';
import {navItems} from './navItem.type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  navItems = navItems;
  numActive = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickActive(id: number): void {
    this.numActive = id;
  }
}
