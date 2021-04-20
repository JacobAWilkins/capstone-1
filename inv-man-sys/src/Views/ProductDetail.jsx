import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Media from 'react-bootstrap/Media';

function ProductDetail({ products, onDelete }) {
    const history = useHistory();
    const { productId } = useParams();
    const product = products.find(product => product.id == productId);

    const handleDelete = (e) => {
        const PRODUCT_URL = 'http://localhost:8080/product/';

        fetch(PRODUCT_URL + productId, { method: 'DELETE' })
            .then(() => onDelete());

        history.push("/")
    }

    return (
        <Media style={{ marginTop: 10, marginBottom: 10 }}>
            <img className="prodPic" src={product.image} alt={product.name} />
            <Media.Body>
                <h1>{product.name}</h1>
                <hr />
                <h4>Price: <i>${(product.price).toFixed(2)}</i></h4>
                <h4>Quantity: <i>{product.quantity}</i></h4>
                <h4>Manufacturer: <i>{product.manufacturer}</i></h4>
                <h4>Category: <i>{product.category}</i></h4>
                <h4>SN: <i>{product.serNum}</i></h4>
                <input type="button" value="Delete" onClick={handleDelete} />
            </Media.Body>
        </Media>
    )
}

export default ProductDetail;