import Routes from "../../fixtures/routes";
import { LOAD_CATEGORIES_LIST, LOAD_GLASS_LIST, LOAD_INGREDIENTS_LIST, LOAD_ALCOHOL_LIST } from "../../fixtures/actionTypes";

export const loadCategoriesList = () => dispatch => {
  fetch(Routes.categories.getCategoriesList())
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_CATEGORIES_LIST, data })))
};

export const loadGlassList = () => dispatch => {
  fetch(Routes.categories.getGlassList())
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_GLASS_LIST, data })))
};

export const loadIngredientsList = () => dispatch => {
  fetch(Routes.categories.getIngredientsList())
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_INGREDIENTS_LIST, data })))
};

export const loadAlcoholList = () => dispatch => {
  fetch(Routes.categories.getAlcoholList())
    .then(response => response.ok && response.json()
      .then(data => dispatch({ type: LOAD_ALCOHOL_LIST, data })))
};
