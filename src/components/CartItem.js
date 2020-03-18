import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/actions'
function CartItem(props){
    
     console.log("Cart Item",props.item);
     
    return (
        <tr>
            <th scope="row">{props.index+1}</th>
            <td>{props.item.title}</td>
            <td>{props.item.price}</td>
            <td>
                <input type="number" min="1" value={props.item.productCounter}/>
            </td>
            <td><strong>{props.item.price*props.item.productCounter} USD</strong></td>
            <td>
                <a href="/#" className="label label-info update-cart-item">Update</a>
                 <a href="/#" className="label label-danger delete-cart-item" 
                 onClick={()=>props.dispatch(actions.deleteFromCart(props.item))}>Delete</a>
            </td>
        </tr>
    )

}
export default connect(null,null)(CartItem)