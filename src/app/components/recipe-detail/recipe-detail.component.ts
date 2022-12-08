import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipe.model';
import { AppState } from 'src/app/state/app.state';
import { selectRecipe } from 'src/app/state/selectors/recipe-details.selector';
import { deleteRecipe } from 'src/app/state/selectors/delete-recipe.selector';
import { loadingRecipe } from 'src/app/state/actions/recipe-details.action';
import { deletingRecipe } from 'src/app/state/actions/delete-recipe.action';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  id: string;
  recipe$: Observable<Recipe>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.id = '';
    this.recipe$ = new Observable<Recipe>();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.recipe$ = this.store.select(selectRecipe);

    this.store.dispatch(loadingRecipe({ id: this.id }));
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  deleteRecipe() {
    this.recipe$ = this.store.select(deleteRecipe)
    this.store.dispatch(deletingRecipe({ id: this.id}));
  }

  updateRecipe() {
    this.router.navigate(['/update', this.id]);
  }
}
