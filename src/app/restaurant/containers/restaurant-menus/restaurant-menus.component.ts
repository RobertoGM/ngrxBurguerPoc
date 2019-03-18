import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as MenuState from '../../store/reducers';
import * as MenuSelectors from '../../store/selectors/menu.selector';
import * as MenuActions from '../../store/actions/menu.actions';

@Component({
  selector: 'app-restaurant-menus',
  templateUrl: './restaurant-menus.component.html',
  styleUrls: ['./restaurant-menus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantMenusComponent implements OnInit {
  menus$ = this.store.pipe(select(MenuSelectors.selectAll));

  constructor(private store: Store<MenuState.State>) {}

  ngOnInit() {
    this.store.dispatch(new MenuActions.LoadMenu());
  }
}
