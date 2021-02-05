import { ADD_SINGLE_COCKTAIL } from "../../fixtures/actionTypes";

const singleCoctailReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SINGLE_COCKTAIL:
      return action.data.drinks;
    default:
      return state;
  }
};

export default singleCoctailReducer;
