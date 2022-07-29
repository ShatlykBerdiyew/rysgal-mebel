import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    products:productsReducer,
})

export default rootReducer;