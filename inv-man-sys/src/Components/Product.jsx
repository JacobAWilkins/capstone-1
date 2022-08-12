import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//class Product extends React.Component {
function Product({ id, name, price, quantity, cartQuantity, image, inCart, addToCart }) {

    const [newCartQuantity, setCartQuantity] = useState(cartQuantity);

    const nums = Array.from(Array(quantity).keys());

    // updates the cart quantity of the product
    function handleQuantityChange(e) {
        setCartQuantity(e.target.value);
    }

    return (
        <>
            <Card
                bg={'light'}
                style={{ width: '20rem' }}
            >
                <Link to={'/' + id}>
                    <Card.Img variant="top" src={image} alt={name} />
                </Link>
                <Card.Body>
                    <Card.Title>
                        <Link to={'/' + id}>{name}</Link>
                    </Card.Title>
                    <Card.Text>
                        {"$" + (price * newCartQuantity).toFixed(2)}
                    </Card.Text>
                    <Form.Control size={quantity} as="select" defaultValue={newCartQuantity} onChange={handleQuantityChange}>
                        {nums.map(num => <option>{num + 1}</option>)}
                    </Form.Control>
                    <Button className="addToCartButton" variant="outline-info" type="submit" onClick={() => addToCart(id, newCartQuantity)}>
                        {inCart ? <>In Cart</> : <>Add to Cart</>}
                    </Button>
                </Card.Body>
            </Card>
        </>
    )

}

export default Product;

