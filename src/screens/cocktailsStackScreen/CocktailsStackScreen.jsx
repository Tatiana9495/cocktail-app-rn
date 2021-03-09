import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CocktailsScreen from "./childScreen/CocktailsScreen";
import FilterScreen from "./childScreen/FilterScreen";
import SingleCocktailScreen from "./childScreen/SingleCocktailScreen";
import IngredientScreen from "./childScreen/IngredientScreen";
import IngredientFilterScreen from "./childScreen/IngrediendFilterScreen";
import TypeFilterScreen from "./childScreen/TypeFilterScreen";
import CategoryFilterScreen from "./childScreen/CategoryFilterScreen";
import GlassFilterScreen from "./childScreen/GlassFilterScreen";

const CocktailsStack = createStackNavigator();

const CocktailsStackScreen = () => {
  return (
    <CocktailsStack.Navigator>
      <CocktailsStack.Screen name="Cocktails" component={CocktailsScreen} />
      <CocktailsStack.Screen name="Filter" component={FilterScreen} />
      <CocktailsStack.Screen name="Cocktail" component={SingleCocktailScreen} />
      <CocktailsStack.Screen name="Ingredient" component={IngredientScreen} />
      <CocktailsStack.Screen name="Select ingredient" component={IngredientFilterScreen} />
      <CocktailsStack.Screen name="Select type" component={TypeFilterScreen} />
      <CocktailsStack.Screen name="Select category" component={CategoryFilterScreen} />
      <CocktailsStack.Screen name="Select glass" component={GlassFilterScreen} />
    </CocktailsStack.Navigator>
  );
};

export default CocktailsStackScreen;
