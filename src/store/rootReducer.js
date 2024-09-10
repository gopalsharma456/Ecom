import { combineReducers } from "redux";
import cartReducer from "../store/reducers/cartReducer";
import wishListReducer from "../store/reducers/wishListReducer";

const rootReducer = combineReducers({
  cartReducer,
  wishList: wishListReducer,
});

export default rootReducer;
