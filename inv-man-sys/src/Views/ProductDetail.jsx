import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
    const {productId} = useParams();
    const product = products.find(product => product.id === productId);

    return (
        <div>
            <img className="prodPic" src={product.image} alt={product.name}/>
            <h1>{product.name}</h1>
            <h4 className="prodPrice">Price: {product.price}</h4>
            <h4>Quantity: {product.quantity}</h4>
            <h4>Manufacturer: {product.manufacturer}</h4>
            <h4>Category: {product.category}</h4>
            <h4>SN: {product.serNum}</h4>
        </div>
    )
}

export default ProductDetail;