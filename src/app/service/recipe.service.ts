import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  readonly BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.BASE_URL}/recipes`);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.BASE_URL}/recipes/${id}`);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.BASE_URL}/recipes`, recipe);
  }

  deleteRecipeById(id: string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.BASE_URL}/recipes/${id}`);
  }

  updateRecipeById(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.BASE_URL}/recipes/${recipe.id}`, recipe);
  }
}



