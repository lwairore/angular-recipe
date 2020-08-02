import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../../core/recipe.service';
import { Recipe } from '../../core/recipe';

@Component({
  selector: 'mra-specific-recipe-details',
  templateUrl: './specific-recipe-details.component.html',
  styles: [
  ]
})
export class SpecificRecipeDetailsComponent implements OnInit, OnDestroy {
  recipeName: string;
  recipeDetails: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) { 
    
  }

  ngOnInit(): void {
    this.recipeName = this.activatedRoute.snapshot.paramMap.get('recipeName')
    this.recipeDetails = this.recipeService.getRecipe(this.recipeName);
  }

  ngOnDestroy():void {
  }

}
