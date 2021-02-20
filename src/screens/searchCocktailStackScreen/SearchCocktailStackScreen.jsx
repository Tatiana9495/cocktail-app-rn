import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchCocktailScreen from "./childScreen/SearchCocktailScreen";
import SingleCocktailScreen from "../cocktailsStackScreen/childScreen/SingleCocktailScreen";
import IngredientScreen from "../cocktailsStackScreen/childScreen/IngredientScreen";

const SearchStack = createStackNavigator();

const SearchCocktailStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search cocktail" component={SearchCocktailScreen} />
      <SearchStack.Screen name="Cocktail" component={SingleCocktailScreen} />
      <SearchStack.Screen name="Ingredient" component={IngredientScreen} />
    </SearchStack.Navigator>
  )
};

export default SearchCocktailStackScreen;