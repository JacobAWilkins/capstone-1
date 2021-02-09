import React, { useState } from 'react';
import Product from './Product';

function Products() {
    const [products, setProducts] = useState([]);

    return (
        <div className="products">
            {products.map((product, index) =>
                <Product 
                    key={index}
                    name={product.name}
                    serNum={product.serNum}
                    price={product.price}
                    manufacturer={product.manufacturer}
                    category={product.category}
                    quantity={product.quantity}
                    image={product.image}
                />
            )}
        </div>
    )
}

export default Products;