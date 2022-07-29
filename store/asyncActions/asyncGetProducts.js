import { getProductsList } from "../actions/getProductsList"
import { BASE_URL } from "../urls"

export const asyncGetProductsList = (limit, offset) => {
    return function(dispatch) {
        console.log('Limit: ', limit, 'offset: ', offset)
        fetch( `${BASE_URL}/api/products/product-list/?limit=${limit}&offset=${offset}`)
            .then(res => res.json())
            .then(json => {
                if(json.response === 'success'){
                    console.log('dogry jogap geldi')
                    dispatch(getProductsList(json.data))
                }
            })
            .catch(err => console.log(err))
    }
}