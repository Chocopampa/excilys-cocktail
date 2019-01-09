import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe/routed/recipe-list/recipe-list.component';
import { RecipeOverviewComponent } from './recipe/routed/recipe-overview/recipe-overview.component';

const routes: Routes = [{
  path: 'recipes',
  component: RecipeListComponent
}, {
  path: 'recipe/:id',
  component: RecipeOverviewComponent
}, {
  path: '**',
  redirectTo: 'recipes'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
