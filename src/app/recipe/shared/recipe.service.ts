import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { MOCK_RECIPES } from './recipe.mock';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  SERVER_URL = 'http://10.0.1.150:8080/api/v1/recipes';

  constructor(private _httpClient: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(this.SERVER_URL);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this._httpClient.get<Recipe>(`${this.SERVER_URL}/${id}`);
  }

  postRecipe(recipe: Recipe): Observable<Recipe> {
    return this._httpClient.post<Recipe>(this.SERVER_URL, recipe);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this._httpClient.delete<Recipe>(`${this.SERVER_URL}/${id}`);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this._httpClient.patch<Recipe>(`${this.SERVER_URL}`, recipe);
  }
}
