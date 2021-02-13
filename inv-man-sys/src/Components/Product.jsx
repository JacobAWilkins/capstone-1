import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Product({ id, name, price, cartQuantity, image, inCart, addToCart }) {
    const [newCartQuantity, setCartQuantity] = useState(cartQuantity);
    function handleQuantityChange(e) {
        setCartQuantity(e.target.value);
    }

    return (
        <Container className="prod">
            <div className="prodInfo">
                <Link to={'/' + id}><img className="prodPic" src={image} alt={name} /></Link>
                <h3 className="prodName" width="85%">
                    <Link to={'/' + id}>{name}</Link>
                </h3>
                <h5 className="prodPrice">${(price * cartQuantity).toFixed(2)}</h5>
            </div>
            <div className="prodAdd">
                <Form.Row>
                    <Form.Group>
                        <Form.Control size="sm" as="select" defaultValue={newCartQuantity} onChange={handleQuantityChange}>
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
                        <Button variant="primary" type="submit" onClick={() => addToCart(id, newCartQuantity)}>
                            {inCart ? <>In Cart</> : <>Add to Cart</>}
                        </Button>
                    </Form.Group>
                </Form.Row>
            </div>
        </Container>
    )
}

export default Product;

