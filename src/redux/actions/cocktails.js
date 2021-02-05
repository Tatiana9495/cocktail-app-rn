import Routes from "../../fixtures/routes";
import { LOAD_COCKTAILS_LIST, ADD_SINGLE_COCKTAIL, LOAD_RANDOM_COCKTAIL } from "../../fixtures/actionTypes";

export const loadCocktailsList = () => dispatch => {
  fetch(Routes.cocktails.getList())
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_COCKTAILS_LIST, data })))
};

export const loadSingleCocktail = (id) => dispatch => {
  fetch(Routes.cocktails.getSingle(id))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: ADD_SINGLE_COCKTAIL, data })))
};

export const loadRandomCocktail = () => dispatch => {
  fetch(Routes.cocktails.getRandom())
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_RANDOM_COCKTAIL, data })))
};
