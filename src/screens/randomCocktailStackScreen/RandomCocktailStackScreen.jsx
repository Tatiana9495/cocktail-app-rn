import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SingleCocktailScreen from "../cocktailsStackScreen/childScreen/SingleCocktailScreen";
import RandomCocktailScreen from "./childScreen/RandomCocktailScreen";
import IngredientScreen from "../cocktailsStackScreen/childScreen/IngredientScreen";

const RandomCocktailStack = createStackNavigator();

const RandomCocktailStackScreen = () => {
  return (
    <RandomCocktailStack.Navigator>
    <RandomCocktailStack.Screen name="Random cocktail" component={RandomCocktailScreen} />
    {/* <RandomCocktailStack.Screen name="Filter" component={FilterScreen} /> */}
    <RandomCocktailStack.Screen name="Cocktail" component={SingleCocktailScreen} />
    <RandomCocktailStack.Screen name="Ingredient" component={IngredientScreen} />
  </RandomCocktailStack.Navigator>
  );
};

export default RandomCocktailStackScreen;
