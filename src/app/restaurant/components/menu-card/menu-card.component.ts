import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
  }

}
