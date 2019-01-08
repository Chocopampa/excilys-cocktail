import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { MOCK_RECIPES } from './recipe.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Recipe[] {
    return MOCK_RECIPES;
  }
}
