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
        'eggs-smokies-with-kachumbari',
        'Eggs, smokies with kachumbari',
        '/assets/img/recipe/eggs-smokies-with-kachumbari-recipe-main-photo.jpg/',
        2,
        15,
        [`/assets/img/recipe/eggs-smokies-with-kachumbari-recipe-step-1-photo.jpg`,
          `/assets/img/recipe/eggs-smokies-with-kachumbari-recipe-step-2-photo.jpg`,
          `/assets/img/recipe/eggs-smokies-with-kachumbari-recipe-step-3-photo.jpg`],
        8,
        15,
        230,
        `This are sold by the road sides in plenty. So I decided to do them at home.`,
        [`2 eggs`,
          `2 smokies`,
          `Water to boil`,
          `1 onion`,
          `1 tomato`,
          `Dhania`,
          `Salt to sprinkle`
        ],
        [`Boil eggs for 15minutes, but 5 minutes to time and the smokies. I did that because my smokes were frozen`,
          `When that is boiling, cut onions into small pieces put in hot salty water for 10 minutes. Cut tomatoes and dhania in small pieces and assemble the kachumbari`,
          `Remove the eggs and smokies from fire. Run the eggs in cold water to enable easy peeling. Cut the eggs and smokies into halves and add the kachumbari. Sprinkle salt and enjoy.`],
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
        `castoal-biryani`,
        `Castoal Biryani`,
        `/assets/img/recipe/castoal-biryani-recipe-main-photo.jpg`,
        3,
        56,
        [
          `/assets/img/recipe/castoal-biryani-recipe-step-14-photo.jpg`,
          `/assets/img/recipe/castoal-biryani-recipe-step-14-photo_2.jpg`,
          `/assets/img/recipe/castoal-biryani-recipe-step-14-photo_3.jpg`
        ],
        5,
        20,
        800,
        `I love biryani.`,
        [
          `3 onions choped finely`,
          `Yellow or red food colour`,
          `Potatoes`,
          `Ginger & Garlic paste`,
          `Pilau mix`,
          `1 kg meat`,
          `Royco muchuzi mix`,
          `2 tomatoes`,
          `1 Green pepper`,
          `Tomato paste`,
          `Maziwa lala (fermented milk)`,
          `Lemon juice (optional)`,
          `to taste Salt`,
          `1 cup rice`,
          `2 cups water`
        ],
        [
          `Chop onions and deep fry in hot oil until golden brown.`,
          `Peel and cut your potatoes then add food colour.`,
          `When the onions are golden brown set it aside.`,
          `Then add the potatoes in the oil for 1minutes.`,
          `In another pan or sufuria.Add some oil.Also add ginger,garlic and pilau mix.`,
          `Add the meat into the garlic and ginger.Then add royco muchuzi mix.`,
          `When potators are ready cooked set a side.`,
          `Add 2 chopped tomatoes and green pepper. And add into the meat.`,
          `Then add tomato paste.Also add the farmented milk.`,
          `If you want you can add lemon juice.`,
          `Add salt and mix.After a minute add the potatoes and onions then mix.This is the "rojo"`,
          `In another sufuria add 2cups of boiling water.Also add some oil and salt.Add also 1cup of rice.When the water is still in the rice.Take a bowl and add water then add food colour pour it in between. And don't mix.Let it drain the water.When the water has drain.You can mix.`,
          `When the rojo is ready switch the heat.`,
          `Your biryani is ready`
        ],
        [
          {
            name: 'Fridah Muthoni',
            profilePicture: `/assets/img/people/fridah_muthoni.jpg`,
            email: `fridahmuthoni@spiral.com`,
            comment: `Woow`,
            postedOn: new Date('Wed Jul 15 2020 22:32:27')
          }
        ]
      )
    )

    this.allRecipes.push(
      new Recipe(
        `scrumbled-eggs-spinach-and-brown-ugali`,
        `Scrumbled eggs, spinach and brown ugali`,
        `/assets/img/recipe/scrumbled-eggs-spinach-and-brown-ugali-recipe-main-photo.jpg`,
        2,
        78,
        [
          `/assets/img/recipe/scrumbled-eggs-spinach-and-brown-ugali-recipe-main-photo.jpg`
        ],
        3,
        40,
        567,
        `A nice meal just after spiritual nourishment. What a beautiful meal for a sunday afternoon`,
        [
          `4 eggs`,
          `½ cup milk`,
          `4 bunches spinach`,
          `Green onions`,
          `1 tomato`,
          `1 small hoho`,
          `Cooking oil`,
          `1 tbsp prestige margarine`,
          `1 tsp cumin powder`,
          `to taste Salt`
        ],
        [
          `For the spinach,, put oil in the sufuria, fry the onions then tomatoes and let the tomatoes cook, add hoho and stir a bit, add cumin powder and stir. Then add your spinach and stir. Add salt to your taste. Let it cook for 2 minutes`,
          `For the eggs, in a bowl beat the eggs with milk, add salt,, beat for 2 minutes. Heat a pan and rub margarine on it. Pour in your eggs and start to stir until its well cooked.`,
          `Serve with ugali`
        ]
      )
    )

    this.allRecipes.push(
      new Recipe(
        `kienyeji-stew-with-kachimbari-n-matoke-chapati`,
        `Kienyeji stew with kachimbari n matoke..... Chapati`,
        `/assets/img/recipe/kienyeji-stew-with-kachimbari-n-matoke-chapati-recipe-main-photo.jpg`,
        1,
        98,
        [],
        1,
        34,
        789,
        `Lazy Sunday at mum's place, we had to fix something to eat`,
        [
          `Onion`,
          `Tangawizi`,
          `Garlic`,
          `Tumeric`,
          `Salt`,
          `Raw bananas`
        ],
        [
          `For the chicken we just boiled with enough onions... The first round`,
          `Once the water reduced we fried it with onions, garlic, fresh tangawizi n fresh tumeric`,
          `Added more water to boil till the meat was ready`,
          `The raw bananas we boiled asaide without peeling...`,
          `Once ready, we passed it through cold water to cool it off`,
          `Peeled them off and deeped them in the chicken stew for only 5 minutes`
        ]
      )
    )

    this.allRecipes.push(
      new Recipe(
        `fried-spinach`,
        `Fried Spinach`,
        `/assets/img/recipe/fried-spinach-recipe-main-photo.jpg`,
        1,
        90,
        [],
        1,
        32,
        903,
        `Recipe on how to prepare Fried Spinach`,
        [
          `Spinach`,
          `Onions`,
          `Oil`,
          `Salt`,
          `Curry powder`,
          `Turmeric`,
          `Black pepper`
        ],
        [
          `Wash and shred the spinach`,
          `Dice lots of onion`,
          `In a pot fry the onions in oil until soft`,
          `Add salt, black pepper, turmeric, and curry powder and stir`,
          `Add the shredded spinach`,
          `Stir and let cook for 4 minutes`,
          `Serve hot with favorites carbohydrate and protein.`
        ]
      )
    );

    this.allRecipes.push(
      new Recipe(
        `deep-fried-omena-sardines`,
        `Deep fried omena (sardines)`,
        `/assets/img/recipe/deep-fried-omena-sardines-recipe-main-photo.jpg`,
        5,
        56,
        [],
        3,
        34,
        452,
        `Can never get enough of omena. Goes so well with ugali and any vegetables of your choice, in this case i had mine with white cabbage`,
        [
          `Omena worth 50 kenyan shillings`,
          `1 large onion`,
          `2 tomatoes`,
          `1 hoho`,
          `Dhania`,
          `1 tsp cumin powder`,
          `¼ cup milk`,
          `3 tbsp cream`,
          `Cooking oil`,
          `to taste Salt`
        ],
        [
          `Sort out the omena to remove any chaff`,
          `Soak the omena in boiling water for 20 minutes or so`,
          `Put them in a strainer and run cold water to wash them making sure not to break them. Let them dry for another 30 minutes or if possible under the sun`,
          `Bring oil to a boil and deep fry them till somehow crispy, then remove them from the oil and transfer them to a plate`,
          `In a sufuria, fry onions till golden brown, add tomatoes and let them cook, add the omena and cumin and stir.`,
          `Add hoho and cream and stir, add milk and cover to let the milk boil. Stir to make sure it does not stick to your sufuria or pan.`,
          `Add salt and garnish with dhania and remove from fire`,
          `Serve with ugali and vegetables`
        ]
      )
    );

    this.allRecipes.push(
      new Recipe(
        `brain-curry`,
        `Brain curry`,
        `/assets/img/recipe/brain-curry-recipe-main-photo.jpg`,
        4,
        89,
        [
          `/assets/img/recipe/brain-curry-recipe-step-1-photo.jpg`,
          `/assets/img/recipe/brain-curry-recipe-step-2-photo.jpg`,
          `/assets/img/recipe/brain-curry-recipe-step-3-photo.jpg`,
          `/assets/img/recipe/brain-curry-recipe-step-4-photo.jpg`,
          `/assets/img/recipe/brain-curry-recipe-step-5-photo.jpg`,
          `/assets/img/recipe/brain-curry-recipe-step-6-photo.jpg`,
          `/assets/img/recipe/brain-curry-recipe-step-7-photo.jpg`
        ],
        2,
        25,
        298,
        `This is a surprisingly simple, spicy and delicious curry recipe.`,
        [
          `½ kg goat/lamb brain`,
          `1 onion, finely chopped`,
          `1 tomato, blended`,
          `1 tablespoon tomato paste`,
          `2 green chili`,
          `2 tablespoon vegetable oil`,
          `1 teaspoon garlic, minced`,
          `1 teaspoon ginger, minced`,
          `½ teaspoon chili powder`,
          `½ teaspoon turmeric`,
          `½ teaspoon coriander powder`,
          `½ teaspoon paprika`,
          `½ teaspoon cumin`,
          `½ teaspoon garam masala`,
          `to taste Salt`
        ],
        [
          `Have your ingredients ready.`,
          `Dice the brain into 4 pieces, and give it a quick wash on a strainer.`,
          `Bring a pan of water to boil. Add the brain and simmer for about 3 minutes to firm up the brain. Drain all the water with a fine strainer.`,
          `Heat oil in a pan over a medium heat. Add the onions and sauté for about 6-7 minutes until the onions start to brown.`,
          `Add the blended tomato, spices and the garlic & ginger paste. Stir-fry for a further 3 minutes.`,
          `Add the brain and mix well. Continue to cook uncovered without stirring for a final 5-6 minutes.`,
          `Sprinkle on some garam masala, fresh coriander/curry leaves and slices of fresh ginger to serve.`,
          `The texture of the brain is very soft in this dish and it is quite like eating spicy scrambled eggs.
            You can use lamb, goat or cow brain for this dish but be warned – brains are packed with cholesterol so don’t eat this too frequently.`,
          `Best served with chapati, naan or pita bread. ENJOY 🌹`
        ],
        [
          {
            name: `Kevo`,
            profilePicture: `/assets/img/people/kevo.jpg`,
            email: `kevo@spiral.com`,
            comment: `Human brains or what?😵`,
            postedOn: new Date('Thu Jul 16 2020 20:32:27')
          }
        ]
      )
    );

    this.allRecipes.push(new Recipe(
      `exe-mandazis`,
      `EXE mandazis`,
      `/assets/img/recipe/exe-mandazis-recipe-main-photo.jpg`,
      5,
      190,
      [
        `/assets/img/recipe/exe-mandazis-recipe-step-1-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-2-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-3-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-4-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-5-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-6-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-7-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-8-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-9-photo.jpg`,
        `/assets/img/recipe/exe-mandazis-recipe-step-10-photo.jpg`
      ],
      12,
      100,
      453,
      `How to prepare mandazis with EXE flour`,
      [
        `2 cups EXE mandazi flour`,
        `¼ cup sugar`,
        `½ cup milk`,
        `1 large egg`,
        `1 tsp cinnamon powder`,
        `oil for deep frying`
      ],
      [
        `In a mixing bowl, combine the flour, cinnamin and sugar`,
        `In a separate bowl, whisk eggs into milk. Pour the milk mixture into the flour mixture and knead to a dough.`,
        `Cover the dough in a bowl with a damp cloth and allow to set for 15 minutes`,
        `Divide the dough into several hand sized pieces`,
        `Roll the pieces into 1 cm thickness and use a sharp knife to cut into desited shapes`,
        `Set them aside for a few minutes to let them rise a second time`,
        `Heat oil in a deep frying pan and gently dip the pieces into the oil. let them float.`,
        `Turn a few times until they are golden brown`,
        `Remove and place them in an underlined container`,
        `Serve warm`
      ],
      [{
        name: `Rekha Bapodra`,
        comment: `Yummy reminds me of Kampala`,
        profilePicture: `/assets/img/people/rebeka.jpg`,
        email: `rebekah@spiral.com`,
        postedOn: new Date('Thu Jul 16 2020 19:32:27')
      }]
    ))



  }
}
