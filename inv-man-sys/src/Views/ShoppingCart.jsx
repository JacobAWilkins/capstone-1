import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Products from '../Components/Products';

function ShoppingCart({ products, addToCart, updateOrder }) {
    let cartTotal = 0;
    let filteredProducts = products.filter(product => product.inCart === true);

    filteredProducts.forEach((prod) => {
        cartTotal += (prod.price * prod.cartQuantity);
    })

    // resets products and updates the order information on checkout
    function checkout() {
        let order = []
        filteredProducts.forEach((prod) => {
            order.push({ name: prod.name, quantity: prod.cartQuantity, price: prod.price });

            prod.inCart = false;
            prod.quantity = prod.quantity - prod.cartQuantity;
            prod.cartQuantity = 1;

            const PRODUCT_URL = 'http://localhost:8080/product/';

            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: prod.name, serNum: prod.serNum, price: prod.price, manufacturer: prod.manufacturer, category: prod.category, quantity: prod.quantity, cartQuantity: 1, image: prod.image, inCart: false, filtered: false })
            };
            fetch(PRODUCT_URL + prod.id, requestOptions)
                .then(response => response.json())
                .then(data => console.log('updating product with name: ' + data.name));
        })
        updateOrder(order, cartTotal);

        cartTotal = 0;
    }

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
                <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Review Cart</h1>
            <Products
                products={filteredProducts}
                addToCart={addToCart}
            />
            <hr />
            <div className="shoppingCart">
                <h4 className="totalPrice">Total: {cartTotal.toFixed(2)}</h4>
                <Link to="/shipping">
                    <Button className="checkout" variant="info" type="submit" onClick={checkout}>
                        Checkout
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ShoppingCart;