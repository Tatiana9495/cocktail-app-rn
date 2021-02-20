import Routes from "../../fixtures/routes";
import { LOAD_COCKTAILS_LIST, ADD_SINGLE_COCKTAIL, LOAD_RANDOM_COCKTAIL, LOADING_SINGLE_COCKTAIL, LOAD_COCKTAIL_BY_NAME } from "../../fixtures/actionTypes";

export const loadCocktailsList = (letter) => dispatch => {
  fetch(Routes.cocktails.getList(letter))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_COCKTAILS_LIST, data })))
};

export const loadSingleCocktail = (id) => dispatch => {
  dispatch({ type: LOADING_SINGLE_COCKTAIL });
  fetch(Routes.cocktails.getSingle(id))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: ADD_SINGLE_COCKTAIL, data })))
};

export const loadRandomCocktail = () => dispatch => {
  fetch(Routes.cocktails.getRandom())
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_RANDOM_COCKTAIL, data })))
};

export const loadCocktailByName = (name) => dispatch => {
  fetch(Routes.cocktails.getCocktailByName(name))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_COCKTAIL_BY_NAME, data })))
}