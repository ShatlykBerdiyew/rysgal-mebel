import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { brandReducer } from "./reducers/brandReducer";
import { cardReducer } from "./reducers/cardReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  products: productsReducer,
  brands: brandReducer,
  card: cardReducer,
});

export default rootReducer;
