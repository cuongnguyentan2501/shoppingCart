import * as actionTypes from './../actionTypes/actionType';
import {createNotification} from './../components/Notifiy'
let initialState={shoppingCart:[]};
export default function reducerCart(state=initialState,action){
    const {payload}=action;
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            let index=state.shoppingCart.findIndex((value,index)=>value.id===payload.item.id);
            if(index!==-1){
                state.shoppingCart[index].productCounter+=payload.countProduct;
            }
            else{
                payload.item.productCounter=payload.countProduct;
                state.shoppingCart.push(payload.item);
            }
            createNotification("success");
            return {...state};
        case actionTypes.DELETE_FROM_CART:
            state.shoppingCart=state.shoppingCart.filter(value=>value.id!==payload.item.id);
            return {...state};
        default:
            return state;
    }
}