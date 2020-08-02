import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SpecificRecipeDetailsComponent } from './specific-recipe-details/specific-recipe-details.component';
import { RouterModule } from '@angular/router';
import { RecipeBackgroundComponent } from './recipe-background/recipe-background.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SpecificRecipeDetailsComponent,
    RecipeBackgroundComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
  ]
})
export class RecipeModule { }
