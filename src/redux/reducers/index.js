import { combineReducers } from "redux";

import cocktails from "./cocktails";
import categories from "./categories";
import singleCocktail from "./singleCocktail";
import singleIngredient from "./singleIngredient";

export default combineReducers({
    cocktails,
    categories,
    singleCocktail,
    singleIngredient
});
