import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let watch = 0;
    for(const product of cart){
        watch = product.name;
    }


    return (
        <div className='cart'>
            <h2>Selected Watch</h2>
            <div>
                <p>{watch}</p>
            </div>
        </div>
    );
};

export default Cart;