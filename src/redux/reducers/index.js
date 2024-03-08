import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import iceCreamReducer from "./iceCreamReducer";
const allReducers = combineReducers({
    cart: CartReducer,
    iceCream: iceCreamReducer
})                                                                                             

export default allReducers