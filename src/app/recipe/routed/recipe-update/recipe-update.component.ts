import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from '../../shared/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {
  recipeForm: FormGroup;

  recipe: Recipe;

  constructor(
    private _fb: FormBuilder,
    private _recipeService: RecipeService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeForm = this._fb.group({
      name: [''],
      picture: [''],
      description: ['']
    });
    this._recipeService
      .getRecipe(this._route.snapshot.paramMap.get('id'))
      .subscribe(recipe => {
        this.recipe = recipe;
        this.recipeForm.patchValue({
          name: recipe.name,
          picture: recipe.picture,
          description: recipe.description
        });
      });
  }

  postChanges() {
    this.recipe.name = this.recipeForm.get('name').value;
    this.recipe.picture = this.recipeForm.get('picture').value;
    this.recipe.description = this.recipeForm.get('description').value;
    this._recipeService.updateRecipe(this.recipe).subscribe();
  }
}
