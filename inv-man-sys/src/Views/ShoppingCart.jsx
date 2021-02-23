import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
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
        })
        updateOrder(order, cartTotal);

        cartTotal = 0;
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
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