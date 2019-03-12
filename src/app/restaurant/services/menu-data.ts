import { Menu } from '../models/menu.model';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredients.model';
import { OrderIngredients } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  menus: Menu[] = [
    {
      id: 0,
      name: 'Super burguer',
      description: 'the biggest burguer you will ever see',
      price: 10,
      ingredients: ['onion', 'beef', 'egg', 'tomato'],
      fries: true,
      drink: true
    },
    {
      id: 1,
      name: 'Young burguer',
      description: 'For the youngest of the family',
      price: 7,
      ingredients: ['chicken', 'lettuce', 'tomato'],
      fries: false,
      drink: true
    },
    {
      id: 2,
      name: 'Vegan burguer',
      description: 'Ecologically insuperable',
      price: 8,
      ingredients: ['onion', 'lettuce', 'chickpea burguer', 'tomato'],
      fries: true,
      drink: false
    },
    {
      id: 3,
      name: 'Light Burguer',
      description: 'As light as your pockets can be to afford this burguer',
      price: 3,
      ingredients: ['pork', 'cheese', 'lettuce'],
      fries: false,
      drink: false
    }
  ];

  ingredients: Ingredient[] = [
    { id: 0, name: 'lettuce', price: 1.5 },
    { id: 1, name: 'tomato', price: 1.5 },
    { id: 2, name: 'onion', price: 1.8 },
    { id: 3, name: 'cheese', price: 2.5 },
    { id: 4, name: 'egg', price: 2.5 }
  ];

  baseMeat: Ingredient[] = [
    { id: 0, name: 'chicken', price: 4 },
    { id: 1, name: 'pork', price: 5.5 },
    { id: 2, name: 'beef', price: 6 },
    { id: 3, name: 'chickpea', price: 3 }
  ];

  constructor() {}

  retrieveMenus(): Observable<Menu[]> {
    return of(this.menus);
  }

  retrieveOrderIngredients(): Observable<OrderIngredients> {
    return of({ingredients: this.ingredients, baseMeat: this.baseMeat});
  }
}
