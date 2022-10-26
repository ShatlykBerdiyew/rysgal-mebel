import { GET_ALL_INTERYER } from "../types";

export const addInteryer = (data) => {
    return{
        type: GET_ALL_INTERYER,
        payload:data
    };
}