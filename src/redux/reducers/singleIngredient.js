import { LOAD_SINGLE_INGREDIENT } from "../../fixtures/actionTypes";

const singleIngredientReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_SINGLE_INGREDIENT:
      return action.data.ingredients[0];
    default:
      return state;
  }
};

export default singleIngredientReducer;
