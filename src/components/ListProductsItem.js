import React,{useState} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/actions'
function ListProductsItem({item,dispatch}){
   
    const [countProduct, setCountProduct] = useState(1);
    const handleCountProduct=(e)=>{
        if(e.target.value>countProduct){setCountProduct(countProduct+1)}
        else setCountProduct(countProduct-1);
    }

    return (
        <div className="media product">
            <div className="media-left">
                <a href="/#"><img src={item.img} alt="charmander" className="media-object" /></a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{item.title}</h4>
                <p>{item.description}</p>
                <input
                    type="number" 
                    value={countProduct}
                    min={1}
                    onChange={(e)=>handleCountProduct(e)}
                    /> 
                    
                <a 
                    href="/#" 
                    className="price"
                    onClick={(e)=>{
                        e.preventDefault();
                        setCountProduct(1);
                        dispatch(actions.addToCart(item,parseInt(countProduct)))}}
                >{item.price} USD</a>
            </div>
        </div>
    )
}
export default connect()(ListProductsItem)