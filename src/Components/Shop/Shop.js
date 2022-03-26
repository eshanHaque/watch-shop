import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCart = (product) =>{
        const newCart =[...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <div className='row mt-5'>
                <div className='col-md-10'>
                    <div className='container'>
                        <div className='row watch-container justify-content-evenly'>
                        {
                            products.map(product=> <Product 
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                                ></Product>)
                        }
                        </div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <p>Selected Clothes</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;