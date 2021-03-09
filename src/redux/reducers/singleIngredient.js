import { LOAD_SINGLE_INGREDIENT, LOADING_SINGLE_INGREDIENT } from "../../fixtures/actionTypes";

const initState = {
  data: {},
  isLoadingIngredient: false
}

const singleIngredientReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_SINGLE_INGREDIENT: 
      return {
        ...state,
        isLoadingIngredient: true
      }
    case LOAD_SINGLE_INGREDIENT:
      return {
        ...state,
        data: {...action.data.ingredients[0]},
        isLoadingIngredient: false
      }
    default:
      return state;
  }
};

export default singleIngredientReducer;
