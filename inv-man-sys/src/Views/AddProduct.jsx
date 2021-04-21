import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddProduct({ onAdd }) {
	const history = useHistory();

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

	function download(data, filename, type) {
		var file = new Blob([data], { type: type });
		if (window.navigator.msSaveOrOpenBlob) // IE10+
			window.navigator.msSaveOrOpenBlob(file, filename);
		else { // Others
			var a = document.createElement("a"),
				url = URL.createObjectURL(file);
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			setTimeout(function () {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}, 0);
		}
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
	//<input type="text" value={image} onChange={handleImageChange} />
	//<input type="file" accept={'images/*'} onChange={handleImageChange} />
	const handleSubmit = (e) => {
		const PRODUCT_URL = 'http://localhost:8080/product/';

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: name, serNum: serNum, price: price, manufacturer: manufacturer, category: category, quantity: quantity, cartQuantity: 1, image: image, inCart: false, filtered: false })
		};

		fetch(PRODUCT_URL, requestOptions)
			.then(response => response.json())
			.then(data => onAdd(data.name));

		history.push("/");

	}

	return (
		<>
			<Container>
				<h1>Add Product</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group as={Row} className="shift">
						<Form.Label column sm={3}>Name:</Form.Label>
						<input type="text" value={name} onChange={handleNameChange} />
					</Form.Group>
					<Form.Group as={Row} className="shift">
						<Form.Label column sm={3}>Serial Number:</Form.Label>
						<input type="text" value={serNum} onChange={handleSerNumChange} />
					</Form.Group>
					<Form.Group as={Row} className="shift">
						<Form.Label column sm={3}>Price:</Form.Label>
						<input type="text" value={price} onChange={handlePriceChange} />
					</Form.Group>
					<Form.Group as={Row} className="shift">
						<Form.Label column sm={3}>Manufacturer:</Form.Label>
						<input type="text" value={manufacturer} onChange={handleManufacturerChange} />
					</Form.Group>
					<Form.Group as={Row} className="shift">
						<Form.Label column sm={3}>Category:</Form.Label>
						<input type="text" value={category} onChange={handleCategoryChange} />
					</Form.Group>
					<Form.Group as={Row} className="shift">
						<Form.Label column sm={3}>Quantity:</Form.Label>
						<input type="text" value={quantity} onChange={handleQuantityChange} />
					</Form.Group>
					<Form.Group as={Row} className="shift">
						<Form.Label column sm={3}>Image:</Form.Label>
						<input type="file" accept={'images/*'} onChange={handleImageChange} />
					</Form.Group>
					<input type="submit" value="Submit" />
				</Form>
			</Container>
		</>
	)
}

export default AddProduct;