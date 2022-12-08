import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { RecipesEffects } from './state/effects/recipes.effect';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { RecipeDetailsEffects } from './state/effects/recipe-details.effect';
import { CreateRecipeEffects } from './state/effects/create-recipe.effect';
import { DeleteRecipeEffects } from './state/effects/delete-recipe.effect';
import { UpdateRecipeEffects } from './state/effects/update-recipe.effect';
import { UpdateRecipeComponent } from './components/update-recipe/update-recipe.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HomeComponent,
    PageNotFoundComponent,
    RecipeDetailComponent,
    NavbarComponent,
    FooterComponent,
    CreateRecipeComponent,
    UpdateRecipeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([RecipesEffects,
      RecipeDetailsEffects,
      CreateRecipeEffects,
      DeleteRecipeEffects,
      UpdateRecipeEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
