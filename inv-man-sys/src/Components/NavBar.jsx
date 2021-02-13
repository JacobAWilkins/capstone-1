import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function NavBar({ defaultProducts, setProducts }) {
    const [input, updateInput] = useState('');
    const handleInputChange = e => updateInput(e.target.value);
    const handleKeyPress = e => {
        if (e.charCode === 13) {
            search();
        }
    }

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

    function reset() {
        setProducts(defaultProducts);
    }

    return (
        <header>
            <nav>
                <Container>
                    <Form.Row>
                        <Col md={4}>
                            <Link className="title" onClick={reset} to='/'>
                                <h1>Jacob's Grocery</h1>
                            </Link>
                        </Col>
                        <Form.Group as={Col} md={{ span: 4, offset: 2 }}>
                            <Form.Control
                                className="searchBar"
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                placeholder="Search product, category, etc.." />
                        </Form.Group>
                        <Form.Group>
                            <Button onClick={search}>Search</Button>
                        </Form.Group>
                        <Col>
                            <Link className="navBar" onClick={reset} to="/shopping-cart">
                                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                            </Link>
                        </Col>
                    </Form.Row>
                </Container>
            </nav>
        </header>
    )
}

export default NavBar;