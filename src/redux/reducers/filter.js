import { FILTER_INGREDIENT, FILTER_TYPE, FILTER_CATEGORY, FILTER_GLASS, LOADING_FILTERS } from "../../fixtures/actionTypes";

const initState = {
  filters: {
    ingredient: [],
    type: [],
    category: [],
    glass: []
  },
  isLoadingFilter: false
}

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_FILTERS: 
      return {
        filters: {
          ingredient: [],
          type: [],
          category: [],
          glass: []
        },
        isLoadingFilter: true
      }
    case FILTER_INGREDIENT:
      return {
        filters: {
          ingredient: action.data.drinks,
          type: [],
          category: [],
          glass: []
        },
        isLoadingFilter: false
      }
    case FILTER_TYPE:
      return {
        filters: {
          ingredient: [],
          type: action.data.drinks,
          category: [],
          glass: []
        },
        isLoadingFilter: false
      };
    case FILTER_CATEGORY:
      return {
        filters: {
          ingredient: [],
          type: [],
          category: action.data.drinks,
          glass: []
        },
        isLoadingFilter: false
      };
    case FILTER_GLASS:
      return {
        filters: {
          ingredient: [],
          type: [],
          category: [],
          glass: action.data.drinks
        },
        isLoadingFilter: false
      }
    default:
      return state;
  }
};

export default filterReducer;
