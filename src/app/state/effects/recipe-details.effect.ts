// state/effects/recipe-details.effect.ts

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { RecipeService } from "src/app/service/recipe.service";
import { loadRecipe, loadingRecipe } from "../actions/recipe-details.action";

@Injectable()
export class RecipeDetailsEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}

  loadingRecipe$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingRecipe),
      mergeMap(action => this.recipeService.getRecipeById(action.id) // return the data from the API
        .pipe( // success case
          map(recipe => loadRecipe({ recipe }) // dispatch the loadRecipe action
          )
        ),
      )
    );
  });
}
