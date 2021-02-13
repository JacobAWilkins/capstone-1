import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function ProductDetail({ products, addToCart }) {
    const { productId } = useParams();
    const product = products.find(product => product.id === productId);

    return (
        <div>
            <img className="prodPic" src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <h4 className="prodPrice">Price: ${product.price}</h4>
            <h4>Quantity: {product.quantity}</h4>
            <h4>Manufacturer: {product.manufacturer}</h4>
            <h4>Category: {product.category}</h4>
            <h4>SN: {product.serNum}</h4>
            <Container>
                <Button onClick={() => addToCart(product.id)}>
                    {product.inCart ? <>In Cart</> : <>Add to Cart</>}
                </Button>
            </Container>
        </div>
    )
}

export default ProductDetail;