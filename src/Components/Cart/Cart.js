import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let watch = "";
    for(const product of cart){
        watch = product.name;
    }
    
    return (
        <div className='cart'>
            <h2 className='watch'>Selected Watch</h2>
            <div>
                <p>{watch}</p>
                <button> <p>CHOOSE 1 FOR ME</p> </button>
                <button> <p>CHOOSE Again</p> </button>
            </div>
        </div>
    );
};

export default Cart;