import { LOAD_COCKTAIL_BY_NAME } from "../../fixtures/actionTypes";

const cocktailByNameReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_COCKTAIL_BY_NAME:
      return action.data.drinks;
    default:
      return state;
  }
};

export default cocktailByNameReducer;
