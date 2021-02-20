import { ADD_SINGLE_COCKTAIL, LOADING_SINGLE_COCKTAIL } from "../../fixtures/actionTypes";

const initialState = {
  data: {},
  isLoadingCocktail: false
}

const singleCoctailReducer = (state = [], action) => {
  switch (action.type) {
    case LOADING_SINGLE_COCKTAIL: 
    return {
      ...state,
      isLoadingCocktail: true
    }
    case ADD_SINGLE_COCKTAIL:
      return {
        ...state,
        data: {...action.data.drinks},
        isLoadingCocktail: false
      };
    default:
      return state;
  }
};

export default singleCoctailReducer;
