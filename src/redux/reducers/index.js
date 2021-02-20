import { combineReducers } from "redux";

import cocktails from "./cocktails";
import categories from "./categories";
import singleCocktail from "./singleCocktail";
import singleIngredient from "./singleIngredient";
import randomCocktail from "./randomCocktail";
import cocktailByName from "./cocktailByName";
import filter from "./filter";

export default combineReducers({
  cocktails,
  categories,
  singleCocktail,
  singleIngredient,
  randomCocktail,
  cocktailByName,
  filter
});
