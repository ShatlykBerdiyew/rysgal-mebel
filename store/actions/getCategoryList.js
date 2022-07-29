import { GET_CATEGORY_LIST } from "../types"

export const getCategoryList = (data) => {
    return {
        type: GET_CATEGORY_LIST,
        payload: data
    }
}