
import React from 'react';
import Products from '../Components/Products';

function ProductPage({ products, addToCart }) {
    return (
        <>
            <Products
                products={products}
                addToCart={addToCart}
            />
        </>
    )
}

export default ProductPage;