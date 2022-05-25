import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Main/header/header.component';
import { RecipesComponent } from './Main/recipes/recipes.component';
import { RecipeDetailComponent } from './Main/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './Main/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Main/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Main/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Main/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
