import React from 'react';
export default function CartTotal({countTotal}){
    
    return (
        <tfoot id="my-cart-footer">
            <tr>
    <td colSpan={4}>There are <b>{countTotal.totalProduct}</b> items in your shopping cart.</td>
    <td colSpan={2} className="total-price text-left">{countTotal.totalPrice} USD</td>
            </tr>
        </tfoot>
    )

}