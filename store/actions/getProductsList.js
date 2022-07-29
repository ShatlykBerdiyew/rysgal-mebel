import { GET_PRODUCTS } from "../types"

export const getProductsList = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}