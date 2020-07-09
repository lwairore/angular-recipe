import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'mra-popular-recipe',
  templateUrl: './popular-recipe.component.html',
  styleUrls: ['./popular-recipe.component.css']
})
export class PopularRecipeComponent implements OnInit {
  allPopularRecipes: Array<Recipe> = [];

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.allPopularRecipes = this.recipeService.getPopularRecipe();
  }

}
