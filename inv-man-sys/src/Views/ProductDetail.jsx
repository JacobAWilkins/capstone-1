import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';

function ProductDetail({ products, onDelete }) {
    const history = useHistory();
    const { productId } = useParams();
    const product = products.find(product => product.id == productId);

    const handleDelete = (e) => {
        const PRODUCT_URL = 'http://localhost:8080/product/';

        fetch(PRODUCT_URL + productId, { method: 'DELETE' })
            .then(() => onDelete());

        history.push("/products")
    }

    const handleUpdate = (e) => {
        history.push("/update-product/" + productId);
    }

    const handleBack = (e) => {
        history.push("/products");
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
                <Button className="detailButtons" type="button" variant="outline-info" onClick={handleBack}>Back</Button>
                <Button className="detailButtons" type="button" variant="outline-info" onClick={handleUpdate}>Update</Button>
                <Button className="detailButtons" type="button" variant="outline-info" onClick={handleDelete}>Delete</Button>
            </Media.Body>
        </Media>
    )
}

export default ProductDetail;