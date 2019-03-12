import { Ingredient } from './ingredients.model';

export interface OrderIngredients {
  baseMeat: Ingredient[];
  ingredients: Ingredient[];
}