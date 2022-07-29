import { GET_CATEGORY_LIST } from "../types";

const init = [];

export const categoryReducer = (state = init, action) => {
    switch(action.type) {
        case GET_CATEGORY_LIST:
            return action.payload;
        default : 
         return state;
    }
}