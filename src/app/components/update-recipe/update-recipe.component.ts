import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { updatingRecipe } from 'src/app/state/actions/update-recipe.action';
import { AppState } from 'src/app/state/app.state';
import { selectUpdateRecipeSuccess } from 'src/app/state/selectors/update-recipe.selector';
import { loadingRecipe } from 'src/app/state/actions/recipe-details.action';
import { selectRecipe } from 'src/app/state/selectors/recipe-details.selector';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent {
  id: string;
  updateRecipeSuccess$: Observable<boolean>;

  recipe$ = new Observable<Recipe>();

  updateForm: FormGroup;

  nameInput: FormControl;
  caloriesInput: FormControl;
  fatInput: FormControl;
  satfatInput: FormControl;
  carbsInput: FormControl;
  fiberInput: FormControl;
  sugarInput: FormControl;
  proteinInput: FormControl;
  instructionsInput: FormControl;
  ingredientsInput: FormControl;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.id = '';
    this.updateRecipeSuccess$ = new Observable();
    this.recipe$ = new Observable<Recipe>();

    this.nameInput = new FormControl('', [Validators.required]);
    this.instructionsInput = new FormControl('', [Validators.required]);
    this.ingredientsInput = new FormControl('', [Validators.required]);
    this.caloriesInput = new FormControl('', [Validators.required]);
    this.carbsInput = new FormControl('', [Validators.required]);
    this.fatInput = new FormControl('', [Validators.required]);
    this.satfatInput = new FormControl('', [Validators.required]);
    this.sugarInput = new FormControl('', [Validators.required]);
    this.proteinInput = new FormControl('', [Validators.required]);
    this.fiberInput = new FormControl('', [Validators.required]);

    this.updateForm = new FormGroup({
      name: this.nameInput,
      calories: this.caloriesInput,
      fat: this.caloriesInput,
      satfat: this.satfatInput,
      carbs: this.carbsInput,
      fiber: this.fatInput,
      sugar: this.sugarInput,
      protein: this.proteinInput,
      instructions: this.instructionsInput,
      ingredients: this.ingredientsInput
    });

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.store.dispatch(loadingRecipe({ id: this.id }));
    this.store.select(selectRecipe).subscribe((recipe) => {
      if(recipe){
        this.updateForm.patchValue({
          name: recipe.name,
          calories: recipe.calories,
          fat: recipe.fat,
          satfat: recipe.satfat,
          carbs: recipe.carbs,
          fiber: recipe.fiber,
          sugar: recipe.sugar,
          protein: recipe.protein,
          instructions: recipe.instructions,
          ingredients: recipe.ingredients.join('\n')
        })
      }
    })

    this.updateRecipeSuccess$ = this.store.select(selectUpdateRecipeSuccess);
  }

  updateRecipe(): void {
    this.updateForm.value.ingredients = this.updateForm.value.ingredients.trim().split('\n');
    this.updateForm.value.edit = true;
    this.updateForm.value.id = this.id;
    this.store.dispatch(updatingRecipe({ recipe: this.updateForm.value}));

    this.updateRecipeSuccess$.subscribe(success => {
      console.log(success)
      if (success) {
        alert('recipe updated successfully!');
        this.router.navigate(['/recipes']);
      }
    });
  }

}


