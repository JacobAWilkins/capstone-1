import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function NavBar({ defaultProducts, setProducts }) {
    const [input, updateInput] = useState('');
    const handleInputChange = e => updateInput(e.target.value);
    const handleKeyPress = e => {
        if (e.charCode === 13) {
            search();
        }
    }

    // searches through the products to filter by multiple categories
    function search() {
        const filtered = defaultProducts.filter(product => {
            return product.name.toLowerCase().includes(input.toLowerCase()) ||
                product.serNum.toLowerCase().includes(input.toLowerCase()) ||
                product.category.toLowerCase().includes(input.toLowerCase()) ||
                product.price.toString().toLowerCase().includes(input.toLowerCase()) ||
                product.manufacturer.toLowerCase().includes(input.toLowerCase())
        })
        updateInput(input);
        setProducts(filtered);
    }

    // resets the page to show all products
    function reset() {
        setProducts(defaultProducts);
    }

    return (
        <header>
            <nav>
                <Form.Row>
                    <Col md={4}>
                        <Link className="title" onClick={reset} to='/'><h1 style={{ marginTop: 6 }}>Jacob's Grocery</h1></Link>
                    </Col>
                    <Form.Group as={Col} md={{ span: 3.5, offset: 2 }} style={{ marginTop: 12 }}>
                        <Form.Control
                            className="searchBar"
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Search product, category, etc.." />
                    </Form.Group>
                    <Form.Group md={{ span: 1, offset: 2 }} style={{ marginTop: 12 }}>
                        <Button variant="info" onClick={search}>Search</Button>
                    </Form.Group>
                    <Form.Group md={{ span: 2, offset: 1 }}>
                        <Link className="cartIcon" onClick={reset} to="/shopping-cart">
                            <FontAwesomeIcon icon={faShoppingCart} size="8x" style={{ marginTop: 12 }} />
                        </Link>
                    </Form.Group>
                </Form.Row>
            </nav>
        </header >
    )
}

export default NavBar;