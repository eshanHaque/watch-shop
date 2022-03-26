import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let watch = "";
    for(const product of cart){
        watch = watch +""+ product.name;
    }
    
    return (
        <div className='cart'>
            <h2 className='watch-text'>Selected Watch</h2>
            <div>
                <h4 className='cart-text'>{watch}</h4>
                <button> <p>CHOOSE 1 FOR ME</p> </button>
                <button> <p>CHOOSE Again</p> </button>
            </div>
        </div>
    );
};

export default Cart;