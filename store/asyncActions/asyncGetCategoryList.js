import { getCategoryList } from "../actions/getCategoryList"
import { BASE_URL } from "../urls"

export const asyncGetCategoryList = () => {
    return function(dispatch) {
        fetch( `${BASE_URL}/api/products/categories/`)
            .then(res => res.json())
            .then(json => dispatch(getCategoryList(json)))
            .catch(err => console.log(err))
    }
}