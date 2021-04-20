import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function AddProduct() {
	const history = useHistory();

	const [name, setName] = useState('');
	const [serNum, setSerNum] = useState('');
	const [price, setPrice] = useState(0.0);
	const [manufacturer, setManufacturer] = useState('');
	const [category, setCategory] = useState('');
	const [quantity, setQuantity] = useState(0);
	//const [image, setImage] = useState('');
	const [image, setImage] = useState('');

	const [postId, setPostId] = useState();

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
			const filename = '../images/' + file.name;
			setImage(filename);
			//download(file, filename, '.jpg');

			console.log(filename);
		} else {
			console.log('error');
		}

		//setImage(e.target.value);
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
			.then(data => setPostId(data.id));

		history.push("/");

	}

	return (
		<>
			<Container>
				<h1>Add Product</h1>
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

export default AddProduct;