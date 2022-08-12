import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Billing() {
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  // checks that the form is filled out accurately on submit
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      history.push('/order-confirmation');
    }
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/shopping-cart">Shopping Cart</Breadcrumb.Item>
        <Breadcrumb.Item href="/shipping">Shipping</Breadcrumb.Item>
        <Breadcrumb.Item active>Billing</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Enter Payment Information</h1>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Credit Card Number</Form.Label>
            <Col sm={9}>
              <Form.Control required type="text" placeholder="0000 0000 0000 0000" />
              <Form.Control.Feedback type="invalid">Please provide a credit card number.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Expiry Date</Form.Label>
            <Col sm={9}>
              <Form.Control required type="month" placeholder="MM/YY" />
              <Form.Control.Feedback type="invalid">Please provide an expiry date.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>CVV</Form.Label>
            <Col sm={9}>
              <Form.Control required type="text" placeholder="000" />
              <Form.Control.Feedback type="invalid">Please provide a CVV.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Country</Form.Label>
            <Col sm={9}>
              <Form.Control required type="text" />
              <Form.Control.Feedback type="invalid">Please provide a country.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Address 1</Form.Label>
            <Col sm={9}>
              <Form.Control required type="text" />
              <Form.Control.Feedback type="invalid">Please provide an address.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Address 2</Form.Label>
            <Col sm={9}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>City</Form.Label>
            <Col sm={9}>
              <Form.Control required type="text" />
              <Form.Control.Feedback type="invalid">Please provide a city.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>State</Form.Label>
            <Col sm={9}>
              <Form.Control required type="text" />
              <Form.Control.Feedback type="invalid">Please provide a state.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Postal Code</Form.Label>
            <Col sm={9}>
              <Form.Control required type="text" placeholder="00000" />
              <Form.Control.Feedback type="invalid">Please provide a postal code.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Contact Phone Number</Form.Label>
            <Col sm={9}>
              <Form.Control required type="text" placeholder="(000) 000-0000" />
              <Form.Control.Feedback type="invalid">Please provide a phone number.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Email Address</Form.Label>
            <Col sm={9}>
              <Form.Control required type="email" placeholder="example@example.com" />
              <Form.Control.Feedback type="invalid">Please provide an email.</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" variant="info">Pay Now</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default Billing;