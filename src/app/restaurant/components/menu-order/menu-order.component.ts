import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
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
  @Output() remove = new EventEmitter<Menu>();

  ingredientSelected: boolean;

  constructor() {}

  ngOnChanges() {
    if (this.contentSelectionArray) {
      this.ingredientSelected = !!this.contentSelectionArray.find( (ingredient) => ingredient.id === this.content.id);
    }
  }

  selection(): void {
    this.ingredientSelected
    ? this.remove.emit(this.content)
    : this.selected.emit(this.content);
  }
}
