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
    console.log('Accessed');
    console.log(recipeName)
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
        30,
        [`https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4814257.jpg`,
          `https://prods3.imgix.net/images/articles/2017_06/Non-Feature-grilled-mexican-street-corn-recipe-elotes.jpg`],
        8,
        15,
        230,
        `You've had grilled corn on the cob before, but this is one step better. A common Mexican street food, the elote is grilled corn on the cob coated with a mixture of cotija cheese, mayo, sour cream, chile powder and lime before getting topped with more cheese. The combination of the sweet corn with the salty cheese and spicy chile powder makes for an addictive vegetable side for any summer barbecue.`,
        [`8 ears corn, shucked`,
          `2 tablespoons vegetable oil`,
          `Kosher salt and freshly ground black pepper, to taste`,
          `1 cup crumbled cotija cheese, divided`,
          `½ cup mayo`,
          `½ cup sour cream`,
          `½ cup cilantro leaves, minced, plus more for garnish`,
          `2 teaspoons lime zest`,
          `1 teaspoon ancho chile powder`,
          `Lime wedges, for serving`],
        [`Light a grill. On a sheet pan, toss the corn with the oil, then season with salt and pepper.`,
          `In a small bowl, stir together ⅔ cup of the cotija cheese with the mayo, sour cream, cilantro, lime zest and chile powder to combine.`,
          `Place the corn on the hottest part of the grill and cook, turning as needed, until cooked through and charred, 8 to 10 minutes.`,
          `Remove the corn from the grill and immediately brush each cob liberally with the cheese mixture and transfer to a platter. Garnish each cob with a sprinkle of the remaining ⅓ cup of cheese and more cilantro, then serve with lime wedges.`],
        [
          {
            name: 'John Wachira',
            profilePicture: `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70`,
            email: 'wachira@gmail.com',
            comment: 'Auctor neque vitae tempus quam pellentesque. Amet porttitor eget dolor morbi non arcu risus quis. Phasellus egestas tellus rutrum tellus pellentesque eu. Volutpat consequat mauris nunc congue nisi.',
            postedOn: new Date('Thu Jul 16 2020 22:32:27')
          },
          {
            name: 'Jecinta Njeri',
            profilePicture: `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70`,
            email: 'njerijecinta@yahoo.com',
            comment: 'Volutpat lacus laoreet non curabitur gravida. Proin sed libero enim sed. Id leo in vitae turpis massa sed elementum. Dui faucibus in ornare quam viverra orci. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Risus quis varius quam quisque id. Nec sagittis aliquam malesuada bibendum arcu vitae elementum.',
            postedOn: new Date('Wed Jul 15 2020 22:32:27')
          },
        ]
      ));

    this.allRecipes.push(
      new Recipe(
        'ChocolateCakeWithGreenTeaCream',
        'Chocolate Cake With Green Tea Cream',
        'http://www.vasterad.com/themes/chow/images/recipeThumb-02.jpg',
        4,
        90,
        [`https://www.goodfood.com.au/content/dam/images/h/1/7/p/d/a/image.related.wideLandscape.940x529.h17pc6.png/1541724093450.jpg`,
         `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2019%2F11%2F700_RU286632.jpg`],
        9,
        30,
        400,
        `It may be retro, but a good roulade is always a delight. Something about the swirls is very happiness-inducing, and all the more so when tinged moss-green. Use the best quality matcha you can afford, and taste the cream before adding more – I find it can turn from sweetly vegetal to bitter in a pinch.`,
        [`60g unsalted butter`,
          `60g dark chocolate, roughly chopped`,
          `2 tsp brandy`,
          `4 large eggs, at room temperature`,
          `125g castor sugar`,
          `seeds from ½ vanilla bean`,
          `50g plain flour`,
          `¼ tsp salt`,
          `50g unsweetened cocoa powder (plus 3 tbsp extra for dusting)`,
          `130g white chocolate, roughly chopped`,
          `50g unsalted butter, cubed`,
          `190g cream cheese, cubed, at room temperature`,
          `180g double cream`,
          `2 tsp brandy`,
          `2-3 tsp matcha powder`],
        [`Preheat the oven to 210C (190C fan-forced). Lightly grease then line a Swiss roll pan measuring roughly 25cm x 38cm with baking paper.`,
          `Combine the butter, chocolate and brandy in a small heatproof bowl and set over a pan of simmering water, making sure the base of the bowl isn't touching the water. Stir gently to ensure the chocolate melts evenly, then set aside to cool to room temperature.`,
          `Place the eggs, castor sugar and vanilla seeds in the bowl of a cake mixer fitted with the whisk attachment and beat until the mixture is thick and pale and has tripled in volume. Sift the flour, salt and cocoa powder in a small bowl, then re-sift into the bowl of fully beaten eggs. Fold gently until almost incorporated, then dribble in the melted chocolate mixture and continue to fold gently.`,
          `Scrape the batter into the prepared tin and use a spatula to even it out. Place into the preheated oven and bake until the top has set and a skewer inserted into the middle comes out clean, 8-10 minutes. Remove and cool on a wire rack for a few minutes.`,
          `Combine the extra 3 tablespoons of cocoa powder with the icing sugar and sift about a third of it evenly over the surface of the cake, then cover with a dry, clean tea towel. Place a wire rack or large chopping board on top, then flip the cake over. Lift off the Swiss roll pan and carefully peel away the baking paper, then lightly sift another third of cocoa-icing sugar mixture on top of the cake. Starting with the short end, gently roll up the still-warm cake with the tea-towel inside and allow the rolled-up cake to rest, seam side down.`,
          `For the filling, melt the white chocolate in a bowl set over a pan of simmering water, then set aside to cool. Place the butter in the bowl of an electric mixer with the paddle attachment and beat on medium speed until smooth. Add the cream cheese and continue to beat until smooth. Add cream, melted white chocolate, brandy and matcha powder and beat until soft waves form.`,
          `Unroll the cake, remove the tea towel, and spread the filling over the cake to within 2cm of the edges. Roll the cake up again, then transfer it, seam side down, to a long platter. Sift the remaining cocoa-icing sugar mixture all over before serving.`],
      )
    )

  }
}
