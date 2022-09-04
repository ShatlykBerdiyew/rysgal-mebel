import { combineReducers } from "redux";
import { bannerReducer } from "./reducers/bannerReducer";
import { brandReducer } from "./reducers/brandReducer";
import { cardReducer } from "./reducers/cardReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { likedProductsReducer } from "./reducers/likedProductsReducer";
import { loadingReducer } from "./reducers/loadingReducer";
import { orderReducer } from "./reducers/orderReducer";
import { productsReducer } from "./reducers/productsReducer";
import { searchReducer } from "./reducers/searchReaducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  brands: brandReducer,
  card: cardReducer,
  search: searchReducer,
  user: userReducer,
  order: orderReducer,
  loading: loadingReducer,
  banner: bannerReducer,
  likes: likedProductsReducer,
});

export default rootReducer;
