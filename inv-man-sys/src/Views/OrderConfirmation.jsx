import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

function OrderConfirmation({ order, cartTotal }) {
  return (
    <Container style={{ marginTop: 20 }} >
      <Alert variant="success">
        <Alert.Heading>Order Confirmed!</Alert.Heading>
        <p>
          Dear Customer, thank you for your order!
        </p>
        <hr />
        <p>
          We've received your order and will contact you as soon as your package is shipped. You can find your purchase information below.
        </p>
      </Alert>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item) =>
            <tr>
              <th>{item.name}</th>
              <th>{item.quantity}</th>
              <th>{item.price}</th>
              <th>{(item.quantity * item.price).toFixed(2)}</th>
            </tr>
          )}
          <tr>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>{cartTotal}</th>
          </tr>
        </tbody>
      </Table>
      <Link to="/">
        <Button type="submit" variant="info">Continue Shopping</Button>
      </Link>
    </Container>
  )
}

export default OrderConfirmation;