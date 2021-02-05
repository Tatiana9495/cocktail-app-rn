import Routes from "../../fixtures/routes";
import { LOAD_SINGLE_INGREDIENT } from "../../fixtures/actionTypes";

export const loadSingleIngredient = (name) => dispatch => {
  fetch(Routes.ingredients.getSingle(name))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_SINGLE_INGREDIENT, data })))
};
