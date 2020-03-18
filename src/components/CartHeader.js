import React from 'react';
export default function CartHeader (props){
    return (
        <thead>
            <tr>
            <th width="4%">/#</th>
            <th>Pokemon</th>
            <th width="15%">Price</th>
            <th width="4%">Quantity</th>
            <th width="20%">Subtotal</th>
            <th width="25%">Action</th>
            </tr>
        </thead>
    )
}