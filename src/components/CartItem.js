import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/actions';
import {confirmAlertFunc} from './../model/Confirm'
function CartItem(props){
    const [countProduct, setCountProduct] = useState(1);
    const handleDeleteItem=()=>{
        confirmAlertFunc(props.dispatch,actions.deleteFromCart,props.item);
        
    }
    const handleCountProduct=(e)=>{
        console.log(e.target.value);
        if(e.target.value>countProduct){setCountProduct(countProduct+1)}
        else setCountProduct(countProduct-1);
    }
     useEffect(function(){
        setCountProduct(props.item.productCounter);
     },[]
     )
    const handleUpdateItem=()=>{
        props.dispatch(actions.toggleIsLoading());
        setTimeout(() => {
            props.dispatch(actions.updateFromCart(props.item.id,countProduct));
        }, 1000);
    }
    return (
        <tr>
            <th scope="row">{props.index+1}</th>
            <td>{props.item.title}</td>
            <td>{props.item.price}</td>
            <td>
                <input type="number" min="1" value={countProduct} 
                onChange={(e)=>handleCountProduct(e)}/>
            </td>
            <td><strong>{props.item.price*props.item.productCounter} USD</strong></td>
            <td>
                <a href="/#" className="label label-info update-cart-item"
                onClick={()=>handleUpdateItem()}
                >Update</a>
                 <a href="/#" className="label label-danger delete-cart-item" 
                 onClick={()=>handleDeleteItem()}>Delete</a>
            </td>
        </tr>
    )

}
export default connect(null,null)(CartItem)