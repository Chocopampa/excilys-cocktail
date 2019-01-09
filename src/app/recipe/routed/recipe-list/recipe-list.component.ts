import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
    this._recipeService.getAllRecipes().subscribe(recipes => this.recipes = recipes);
  }

}
