import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  readonly BASE_URL = '';

  constructor(private http: HttpClient) { }

  getApartments(): Observable<Recipe[]> {
    return this.http
    .get<Recipe[]>(`${this.BASE_URL}/recipe`).pipe(
    delay(1500)
    );
  }
}



