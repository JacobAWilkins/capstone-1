import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function OrderConfirmation() {
  return (
    <>
      <h1>Order Confirmed!</h1>
      <Container>
        <Form>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 1 }}>
              <Link to="/">
                <Button type="submit">Continue Shopping</Button>
              </Link>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default OrderConfirmation;