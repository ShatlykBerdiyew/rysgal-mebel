import { GET_ALL_INTERYER } from "../types";

const init = [];

export const interyerReducer = (state=init, actions) => {
    switch(actions.type){
        case GET_ALL_INTERYER:
            return actions.payload;
        default:
            return state;
    }
}