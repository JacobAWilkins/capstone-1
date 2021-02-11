import React from 'react';
import Products from '../Components/Products';

function ShoppingCart({ products, addToCart }) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <Products
                products={products.filter(product => product.inCart === true)}
                addToCart={addToCart}
            />
        </div>
    )
}

export default ShoppingCart;