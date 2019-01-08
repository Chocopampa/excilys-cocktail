import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  toggleDescription = false;

  @Input()
  recipe: Recipe;

  constructor() {}

  ngOnInit() {
    console.log(this.recipe);
  }

  handleToggleDescription() {
    this.toggleDescription = !this.toggleDescription;
  }
}
