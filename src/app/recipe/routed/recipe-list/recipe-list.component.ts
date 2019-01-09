import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  animations: [
    trigger('explainerAnim', [
      transition('* => *', [
        query('.col-0', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.col-1', style({ opacity: 0, transform: 'translateX(+40px)' })),

        query('.col-2', style({ opacity: 0, transform: 'translateY(-40px)' })),

        query('.col-3', style({ opacity: 0, transform: 'translateY(+40px)' })),
        query(
          '.col',
          stagger('500ms', [
            animate(
              '800ms 1.2s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            )
          ])
        ),
        query('.col', [animate(1000, style('*'))])
      ])
    ])
  ]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    this._recipeService
      .getAllRecipes()
      .subscribe(recipes => (this.recipes = recipes));
  }

  suppress(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
