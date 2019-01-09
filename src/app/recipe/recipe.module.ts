import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './routed/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './routed/recipe-detail/recipe-detail.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { StrToArrayPipe } from '../shared/pipes/str-to-array.pipe';
import { RecipeOverviewComponent } from './routed/recipe-overview/recipe-overview.component';
import { RecipeCreateComponent } from './routed/recipe-create/recipe-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeUpdateComponent } from './routed/recipe-update/recipe-update.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeCreateComponent,
    RecipeDetailComponent,
    StrToArrayPipe,
    RecipeOverviewComponent,
    RecipeUpdateComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipeListComponent,
    RecipeCreateComponent,
    RecipeDetailComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecipeModule {}
