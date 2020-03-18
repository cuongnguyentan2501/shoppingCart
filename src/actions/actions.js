import * as actionTypes from './../actionTypes/actionType';

export const addToCart=(item,countProduct)=>{
    return {
        type:actionTypes.ADD_TO_CART,
        payload:{
            countProduct,
            item
        }
    }
}
export const deleteFromCart=(item)=>{
    return {
        type:actionTypes.DELETE_FROM_CART,
        payload:{
            item
        }
    }
}