import { LOAD_CATEGORIES_LIST, LOAD_GLASS_LIST, LOAD_INGREDIENTS_LIST, LOAD_ALCOHOL_LIST } from "../../fixtures/actionTypes";

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_LIST:
      return { ...state, categoriesList: action.data.drinks };
    case LOAD_GLASS_LIST:
      return { ...state, glassList: action.data.drinks };
    case LOAD_INGREDIENTS_LIST:
      return { ...state, ingredientsList: action.data.drinks };
    case LOAD_ALCOHOL_LIST:
      return { ...state, alcoholList: action.data.drinks };
    default:
      return state;
  }
};

export default categoriesReducer;