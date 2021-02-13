import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Shipping() {
    const history = useHistory();

    const [validated, setValidated] = useState(false);
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
        if (validated) {
            history.push('/billing');
        }
    };

    return (
        <>
            <h1>Shipping</h1>
            <Container>
                <Form width="85%" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name" defaultValue="Jacob" />
                            <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" defaultValue="Wilkins" />
                            <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" required />
                            <Form.Control.Feedback type="invalid">Please provide an address.</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">Please provide a city.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">Please provide a state.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom06">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">Please provide a zip.</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." />
                    </Form.Group>
                    <Button type="submit">Continue To Billing</Button>
                </Form>
            </Container>
        </>
    )
}

export default Shipping;