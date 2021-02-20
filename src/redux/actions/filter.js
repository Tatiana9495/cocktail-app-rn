import Routes from "../../fixtures/routes";
import { FILTER_INGREDIENT, FILTER_TYPE, FILTER_CATEGORY, FILTER_GLASS, LOADING_FILTERS } from "../../fixtures/actionTypes";

export const setFilterIngredient = (ingredient) => dispatch => {
  dispatch({ type: LOADING_FILTERS });
  fetch(Routes.ingredients.filter(ingredient))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: FILTER_INGREDIENT, data })))
};

export const setFilterType = (type) => dispatch => {
  dispatch({ type: LOADING_FILTERS });
  fetch(Routes.types.filter(type))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: FILTER_TYPE, data })))
};

export const setFilterCategory = (category) => dispatch => {
  dispatch({ type: LOADING_FILTERS });
  fetch(Routes.categories.filter(category))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: FILTER_CATEGORY, data })))
};

export const setFilterGlass = (glass) => dispatch => {
  dispatch({ type: LOADING_FILTERS });
  fetch(Routes.glasses.filter(glass))
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: FILTER_GLASS, data })))
};
