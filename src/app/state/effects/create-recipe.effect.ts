// state/effects/create-recipe.effect.ts

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { RecipeService } from "src/app/service/recipe.service";
import { createRecipe, createRecipeSuccess } from "../actions/create-recipe.action";

@Injectable()
export class CreateRecipeEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}

  createRecipe$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createRecipe),
      mergeMap(action => this.recipeService.createRecipe(action.recipe) // Create the recipe
        .pipe(
          map(result => createRecipeSuccess() // dispatch the createRecipeSuccess action
          )
        ),
      )
    );

  });
}
