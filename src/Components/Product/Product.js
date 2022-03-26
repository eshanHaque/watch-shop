import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name, price, img} = props.product;  
    
    return (
        <div className='col-lg-4 product'>
            <img src={img} alt=""></img>
            <p className='product-name'>{name}</p>
            <p className='product-price'>{price}</p> 
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;