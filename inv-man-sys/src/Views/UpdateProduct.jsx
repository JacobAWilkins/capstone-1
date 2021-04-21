import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function UpdateProduct({ products, onUpdate }) {
  const history = useHistory();
  const { productId } = useParams();
  const product = products.find(product => product.id == productId);

  const [name, setName] = useState(product.name);
  const [serNum, setSerNum] = useState(product.serNum);
  const [price, setPrice] = useState(product.price);
  const [manufacturer, setManufacturer] = useState(product.manufacturer);
  const [category, setCategory] = useState(product.category);
  const [quantity, setQuantity] = useState(product.quantity);
  const [image, setImage] = useState(product.image);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleSerNumChange = (e) => {
    setSerNum(e.target.value);
  }
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }
  const handleManufacturerChange = (e) => {
    setManufacturer(e.target.value);
  }
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }
  const handleImageChange = (e) => {

    const [file] = e.target.files;
    if (file) {
      const filename = './images/' + file.name;
      setImage(filename);
    } else {
      console.log('error');
    }
  }

  const handleSubmit = (e) => {
    const PRODUCT_URL = 'http://localhost:8080/product/';

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, serNum: serNum, price: price, manufacturer: manufacturer, category: category, quantity: quantity, cartQuantity: 1, image: image, inCart: false, filtered: false })
    };

    fetch(PRODUCT_URL + productId, requestOptions)
      .then(response => response.json())
      .then(data => onUpdate(data.name));

    history.push("/" + productId);

  }

  return (
    <>
      <Container>
        <h1>Update Product</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="shift">
            <Form.Label column sm={3}>Name:</Form.Label>
            <input type="text" value={name} placeholder="Ex: potatoes" onChange={handleNameChange} />
          </Form.Group>
          <Form.Group as={Row} className="shift">
            <Form.Label column sm={3}>Serial Number:</Form.Label>
            <input type="text" value={serNum} placeholder="Ex: 123456789012" onChange={handleSerNumChange} />
          </Form.Group>
          <Form.Group as={Row} className="shift">
            <Form.Label column sm={3}>Price:</Form.Label>
            <input type="text" value={price} placeholder="Ex: 0.49" onChange={handlePriceChange} />
          </Form.Group>
          <Form.Group as={Row} className="shift">
            <Form.Label column sm={3}>Manufacturer:</Form.Label>
            <input type="text" value={manufacturer} placeholder="Ex: Whole Foods" onChange={handleManufacturerChange} />
          </Form.Group>
          <Form.Group as={Row} className="shift">
            <Form.Label column sm={3}>Category:</Form.Label>
            <input type="text" value={category} placeholder="Ex: vegetable" onChange={handleCategoryChange} />
          </Form.Group>
          <Form.Group as={Row} className="shift">
            <Form.Label column sm={3}>Quantity:</Form.Label>
            <input type="text" value={quantity} placeholder="Ex: 28" onChange={handleQuantityChange} />
          </Form.Group>
          <Form.Group as={Row} className="shift">
            <Form.Label column sm={3}>Image:</Form.Label>
            <input type="file" accept={'images/*'} onChange={handleImageChange} />
          </Form.Group>
          <Button type="submit" variant="info">Update</Button>
        </Form>
      </Container>
    </>
  )
}

export default UpdateProduct;