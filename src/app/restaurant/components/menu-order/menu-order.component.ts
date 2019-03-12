import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-menu-order',
  templateUrl: './menu-order.component.html',
  styleUrls: ['./menu-order.component.scss']
})
export class MenuOrderComponent implements OnInit {
  @Input() content: Menu;
  @Output() selected = new EventEmitter<Menu>();

  constructor() {}

  ngOnInit() {}

  selection(): void {
    this.selected.emit(this.content);
  }
}
