import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PopularRecipeComponent } from './popular-recipe/popular-recipe.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PopularRecipeComponent, AboutMeComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopularRecipeComponent,
    AboutMeComponent,
  ]
})
export class CoreModule { }
