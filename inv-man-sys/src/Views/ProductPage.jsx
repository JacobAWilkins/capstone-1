
import React from 'react';
import { Link } from 'react-router-dom'
import Products from '../Components/Products';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ProductPage({ products, addToCart }) {

    const addTip = (props) => (
        <Tooltip id="button-tip" {...props}>
            Add Product
        </Tooltip>
    );

    return (
        <div className="productPage">
            <Products
                products={products}
                addToCart={addToCart}
            />
            <Link to="/add-product">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={addTip}
                >
                    <Button className="addProductButton" type="submit" variant="info" size="md">+</Button>
                </OverlayTrigger>
            </Link>
        </div>
    )
}

export default ProductPage;