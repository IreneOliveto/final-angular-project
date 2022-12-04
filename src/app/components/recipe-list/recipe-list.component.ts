import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
// import { loadingRecipes } from 'src/app/state/actions/recipes.action';
import { AppState } from 'src/app/state/app.state';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  // loading$: Observable<boolean>;
  // recipes$: Observable<Recipe[]>;

  // constructor(
  //   private store: Store<AppState>
  // ) {
  //   this.loading$ = new Observable<boolean>();
  //   this.recipes$ = new Observable<Recipe[]>();
  // }

  ngOnInit(): void {
    // // Check the loading state
    // this.loading$ = this.store.select(state => state.recipeStates.loading);
    // // Check the apartments state
    // this.recipes$ = this.store.select(state => state.recipeStates.recipes);

    // // Trigger loadingApartment actions. Loading should be passing from false => true
    // this.store.dispatch(loadingRecipes());

  }
}
