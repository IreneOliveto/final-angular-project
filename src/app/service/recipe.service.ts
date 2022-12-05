import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  readonly BASE_URL = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http
    .get<Recipe[]>(`${this.BASE_URL}/recipe`).pipe(
    delay(1500)
    );
  }
}



