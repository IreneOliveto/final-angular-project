// state/effects/recipes.effect.ts

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { RecipeService } from "src/app/service/recipe.service";
import { loadRecipes, loadingRecipes } from "../actions/recipes.action";

@Injectable()
export class RecipesEffects {
  constructor(
    // check which actions we have, we import Action and API
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}

  loadingRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingRecipes), // when this accion is dispached
      mergeMap(() => this.recipeService.getRecipes() // return the data from the API
        .pipe( // success case
          map(recipes => loadRecipes({ recipes }), // dispatch the loadRecipes action
          )
        ),
      )
    );
  });
}
