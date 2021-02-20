import { LOAD_RANDOM_COCKTAIL } from "../../fixtures/actionTypes";

const randomCoctailReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_RANDOM_COCKTAIL:
      return action.data.drinks[0];
    default:
      return state;
  }
};

export default randomCoctailReducer;
