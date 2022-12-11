// state/effects/update-recipe.effect.ts

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { RecipeService } from "src/app/service/recipe.service";
import { updateRecipeSuccess, updatingRecipe } from "../actions/update-recipe.action";

@Injectable()
export class UpdateRecipeEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}

  updatingRecipe$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatingRecipe),
      mergeMap(action => this.recipeService.updateRecipeById(action.recipe) // Update the recipe
        .pipe(
          map(recipe => updateRecipeSuccess() // dispatch the updateRecipeSuccess action
          )
        ),
      )
    );
  });
}
