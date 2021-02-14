
import React from 'react';
import Products from '../Components/Products';

function ProductPage({ products, addToCart }) {
    return (
        <div class="productPage">
            <Products
                products={products}
                addToCart={addToCart}
            />
        </div>
    )
}

export default ProductPage;