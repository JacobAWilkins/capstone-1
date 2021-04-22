import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function AddProduct({ onAdd }) {
	const history = useHistory();

	const [name, setName] = useState('');
	const [serNum, setSerNum] = useState('');
	const [price, setPrice] = useState();
	const [manufacturer, setManufacturer] = useState('');
	const [category, setCategory] = useState('');
	const [quantity, setQuantity] = useState();
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

		history.push("/products");

	}

	return (
		<>
			<Breadcrumb>
				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
				<Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
				<Breadcrumb.Item active>Add Product</Breadcrumb.Item>
			</Breadcrumb>
			<Container>
				<h1>Add Product</h1>
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
					<Button type="submit" variant="info">Add</Button>
				</Form>
			</Container>
		</>
	)
}

export default AddProduct;