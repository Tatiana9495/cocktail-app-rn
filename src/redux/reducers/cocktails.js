import { LOAD_COCKTAILS_LIST } from "../../fixtures/actionTypes";

const cocktailsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_COCKTAILS_LIST:
            return action.data.drinks;
        default:
            return state;
    }
};

export default cocktailsReducer;