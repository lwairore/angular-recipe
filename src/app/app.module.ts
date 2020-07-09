import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeModule,
    CoreModule
  ],
  exports: [NavbarComponent,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
