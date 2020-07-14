import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './recipe/homepage/homepage.component';
import { SpecificRecipeDetailsComponent } from './recipe/specific-recipe-details/specific-recipe-details.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'recipe/:recipeName', component: SpecificRecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
