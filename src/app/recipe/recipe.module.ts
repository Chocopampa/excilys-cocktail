import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './routed/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './routed/recipe-detail/recipe-detail.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { StrToArrayPipe } from '../shared/pipes/str-to-array.pipe';
import { RecipeOverviewComponent } from './routed/recipe-overview/recipe-overview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent, StrToArrayPipe, RecipeOverviewComponent],
  imports: [CommonModule, CustomMaterialModule, RouterModule],
  exports: [RecipeListComponent, RecipeDetailComponent]
})
export class RecipeModule {}
