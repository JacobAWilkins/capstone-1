  
import React from 'react';
import Products from '../Components/Products';

function ProductPage({ products, addToCart }) {
    return (
        <div>
            <h1>Product Page</h1>
            <Products
                products={products}
                addToCart={addToCart}
            />
        </div>
    )
}

export default ProductPage;