import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { Ingredient } from '../../models/ingredients.model';

@Component({
  selector: 'app-menu-order',
  templateUrl: './menu-order.component.html',
  styleUrls: ['./menu-order.component.scss']
})
export class MenuOrderComponent implements OnChanges {
  @Input() content: Menu;
  @Input() contentSelection: Menu;
  @Input() contentSelectionArray: Ingredient[];
  @Output() selected = new EventEmitter<Menu>();

  ingredientSelected: boolean;

  constructor() {}

  ngOnChanges() {
    if (this.contentSelectionArray) {
      this.ingredientSelected = !!this.contentSelectionArray[this.content.id];
    }
  }

  selection(): void {
    this.selected.emit(this.content);
  }
}
