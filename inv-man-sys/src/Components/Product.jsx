import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({ id, name, price, cartQuantity, image, inCart, addToCart }) {
    const [newCartQuantity, setCartQuantity] = useState(cartQuantity);
    function handleQuantityChange(e) {
        setCartQuantity(e.target.value);
    }

    return (
        <Card
            bg={'light'}
            style={{ width: '20rem' }}
        >
            <Link to={'/' + id}><Card.Img variant="top" src={image} alt={name} /></Link>
            <Card.Body>
                <Card.Title><Link to={'/' + id}>{name}</Link></Card.Title>
                <Card.Text>
                    {"$" + (price * cartQuantity).toFixed(2)}
                </Card.Text>
                <Form.Control controlId="selectControl" size="sm" as="select" defaultValue={newCartQuantity} onChange={handleQuantityChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </Form.Control>
                <Button className="addToCartButton" variant="outline-info" type="submit" onClick={() => addToCart(id, newCartQuantity)}>
                    {inCart ? <>In Cart</> : <>Add to Cart</>}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Product;

