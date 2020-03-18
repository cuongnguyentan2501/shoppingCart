import { createStore, combineReducers } from "redux";
import reducerProduct from '../reducers/reducerProduct';
import reducerCart from "../reducers/reducerCart";

const allReducer=combineReducers({
    product:reducerProduct,
    cart:reducerCart,
})

const store=createStore(allReducer);
export default store;