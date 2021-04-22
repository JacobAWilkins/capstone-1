
import React from 'react';
import { Link } from 'react-router-dom'
import Products from '../Components/Products';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function ProductPage({ products, addToCart }) {

    const addTip = (props) => (
        <Tooltip id="button-tip" {...props}>
            Add Product
        </Tooltip>
    );

    const handleAddProduct = (e) => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="productPage">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Products</Breadcrumb.Item>
            </Breadcrumb>
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
                    <Button className="addProductButton" type="submit" variant="info" size="md" onClick={handleAddProduct}>+</Button>
                </OverlayTrigger>
            </Link>
        </div>
    )
}

export default ProductPage;