import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function UpdateProduct({ onUpdate }) {
  const history = useHistory();
  const { productId } = useParams();

  const [name, setName] = useState('');
  const [serNum, setSerNum] = useState('');
  const [price, setPrice] = useState(0.0);
  const [manufacturer, setManufacturer] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState('');

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
      //download(file, filename, '.jpg');

      console.log(filename);
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

    history.push("/");

  }

  return (
    <>
      <Container>
        <h1>Update Product</h1>
        <Form onSubmit={handleSubmit}>
          <label>
            Name:
					<input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Serial Number:
					<input type="text" value={serNum} onChange={handleSerNumChange} />
          </label>
          <br />
          <label>
            Price:
					<input type="text" value={price} onChange={handlePriceChange} />
          </label>
          <br />
          <label>
            Manufacturer:
					<input type="text" value={manufacturer} onChange={handleManufacturerChange} />
          </label>
          <br />
          <label>
            Category:
					<input type="text" value={category} onChange={handleCategoryChange} />
          </label>
          <br />
          <label>
            Quantity:
					<input type="text" value={quantity} onChange={handleQuantityChange} />
          </label>
          <br />
          <label>
            Image:
					<input type="file" accept={'images/*'} onChange={handleImageChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </Form>
      </Container>
    </>
  )
}

export default UpdateProduct;