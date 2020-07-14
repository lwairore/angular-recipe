import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SpecificRecipeDetailsComponent } from './specific-recipe-details/specific-recipe-details.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SpecificRecipeDetailsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ]
})
export class RecipeModule { }
