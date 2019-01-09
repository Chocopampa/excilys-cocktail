import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  recipe: Recipe;

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = new Recipe();
  }

  postRecipe() {
    this.handlePostRecipe();
    this._recipeService.postRecipe(this.recipe).subscribe();
  }

  handlePostRecipe() {
    this.recipe.ingredients = [{ ingredientId: 1 } as Ingredient];
  }
}
