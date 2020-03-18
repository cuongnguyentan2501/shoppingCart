import React from 'react';
import {connect} from 'react-redux';
import ListProductsItem from './ListProductsItem';
function ListProducts({ProductData,...restParams}){
    return (
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">List Products</h1></div>
                <div id="list-product" className="panel-body">
                  {ProductData.map((value,index)=>(
                    <ListProductsItem key={index} item={value}/>
                  ))}
                </div>
              </div>
            </div>
    )
}
const mapStateToProps = state => ({ProductData:state.product.ProductData} )
export default connect(mapStateToProps)(ListProducts)