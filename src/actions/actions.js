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
export const updateFromCart=(id,countProduct)=>{
    return {
        type:actionTypes.UPDATE_FROM_CART,
        payload:{
            id,countProduct
        }
    }
}
export const toggleIsLoading=()=>{
    return {
        type:actionTypes.TOGGLE_IS_LOADING,
    }
}