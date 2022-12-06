// state/effects/recipes.effect.ts

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { RecipeService } from "src/app/service/recipe.service";
import { loadRecipes, loadingRecipes } from "../actions/recipes.action";

@Injectable()
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}

  loadingRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingRecipes),
      mergeMap(() => this.recipeService.getRecipes()
        .pipe(
          map(recipes => loadRecipes({ recipes }),
          )
        ),
      )
    );
  });
}
