import { GET_PRODUCTS } from "../types";

const init = {results:[]};

export const productsReducer = (state = init, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}