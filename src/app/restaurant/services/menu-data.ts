import { Menu } from '../models/menu.model';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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

  constructor() { }

  retrieveMenus(): Observable<Menu[]> {
    return of(this.menus);
  }
}