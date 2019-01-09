import {Ingredient} from './ingredient.model';

export class Recipe {

  id: number;
  name: string;
  picture: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];

}
