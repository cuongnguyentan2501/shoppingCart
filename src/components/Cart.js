import React from 'react';
import {connect} from 'react-redux';
import CartHeader from './CartHeader';
import CartEmpty from './CartEmpty';
import CartTotal from './CartTotal';
import CartItem from './CartItem';
function Cart ({cart}){
  
  const handleCountTotal=()=>{
    let countTotal={totalProduct:0,totalPrice:0};
    if(cart.shoppingCart.length!==0){
      countTotal=cart.shoppingCart.reduce((accumulator, currentValue)=>{
        accumulator.totalProduct+=currentValue.productCounter;
        accumulator.totalPrice+=(currentValue.productCounter*currentValue.price);
        return accumulator;
      },countTotal);
      
    }
    return countTotal;
  }
  console.log("cart render",cart.shoppingCart,"Độ dai ",cart.shoppingCart.length);
  
    return (
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h1 className="panel-title">Your Cart</h1></div>
                <div className="panel-body">
                  <table className="table">
                    <CartHeader/>
                    <tbody id="my-cart-body">
                      {
                        cart.shoppingCart.map((item,index)=>(
                          <CartItem key={index} index={index} item={item}/>
                          ))
                      }
                       <CartEmpty/>
                    </tbody>
                   
                    <CartTotal countTotal={handleCountTotal()}/>
                  </table>
                </div>
              </div>
            </div>
    )
}
const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  }
}
export default connect(mapStateToProps)(Cart)