import { Injectable } from '@angular/core';
// import { CoreModule } from './core.module';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private allRecipes: Array<Recipe> = [];

  constructor() {
    this.setupRecipes();
  }

  getAllRecipes = (): Array<Recipe> => {
    return this.allRecipes;
  }

  getRecipe = (recipeName: string) => {
    for (let recipe of this.allRecipes) {
      if (recipe.name === recipeName) {
        return recipe;
      }
    }
    return null;
  }

  getPopularRecipe = (): Array<Recipe> => {
    let popularRecipes = this.allRecipes.filter(item => {
      return item.rating >= 4;
    });

    return popularRecipes;
  }

  setupRecipes = () => {

    this.allRecipes.push(
      new Recipe(
        'MexicanGrilledCornRecipe',
        'Mexican Grilled Corn Recipe',
        'http://www.vasterad.com/themes/chow/images/recipeThumb-01.jpg',
        5,
        30
      ));

    this.allRecipes.push(
      new Recipe(
        'ChocolateCakeWithGreenTeaCream',
        'Chocolate Cake With Green Tea Cream',
        'http://www.vasterad.com/themes/chow/images/recipeThumb-02.jpg',
        4,
        90
      )
    )

  }
}
