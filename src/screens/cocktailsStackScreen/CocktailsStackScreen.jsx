import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import CocktailsScreen from "./childScreen/CocktailsScreen";
import FilterScreen from "./childScreen/FilterScreen";
import SingleCocktailScreen from "./childScreen/SingleCocktailScreen";
import IngredientScreen from "./childScreen/IngredientScreen";

const CocktailsStack = createStackNavigator();

const CocktailsStackScreen = ({ singleCocktail }) => {
  return (
    <CocktailsStack.Navigator>
      <CocktailsStack.Screen name="Cocktails" component={CocktailsScreen} />
      <CocktailsStack.Screen name="Filter" component={FilterScreen} />
      <CocktailsStack.Screen name="Cocktail" component={SingleCocktailScreen} />
      <CocktailsStack.Screen name="Ingredient" component={IngredientScreen} />
    </CocktailsStack.Navigator>
  );
};

export default connect((state) => ({
  singleCocktail: state.singleCocktail
}))(CocktailsStackScreen);
