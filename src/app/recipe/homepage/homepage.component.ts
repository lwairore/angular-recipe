import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../core/recipe.service';
import { Recipe } from '../../core/recipe';

@Component({
  selector: 'mra-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  allAvaialableRecipes: Array<Recipe> = [];

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.allAvaialableRecipes = this.recipeService.getAllRecipes();
  }

}
