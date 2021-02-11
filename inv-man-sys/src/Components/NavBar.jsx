import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar({ defaultProducts, setProducts }) {
    const [input, updateInput] = useState('');
    const handleInputChange = e => updateInput(e.target.value);
    const handleKeyUp = e => {
        if (e.key === 'Enter') {
            search();
        }
    }

    function search() {
        const filtered = defaultProducts.filter(product => {
            return product.name.toLowerCase().includes(input.toLowerCase()) || 
                product.serNum.toLowerCase().includes(input.toLowerCase()) ||
                product.category.toLowerCase().includes(input.toLowerCase()) ||
                product.price.toLowerCase().includes(input.toLowerCase()) ||
                product.manufacturer.toLowerCase().includes(input.toLowerCase())
        })
        updateInput(input);
        setProducts(filtered);
    }

    return (
        <header>
            <nav>
                <Link to='/'><h1>Inventory Management System</h1></Link>
                <ul>
                    <li>
                        <label htmlFor="search">Search for </label>
                        <input 
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyUp={handleKeyUp}
                            placeholder="product, category, etc.."/>
                        <button onClick={search}>Search</button>
                    </li>
                    <li><Link className="navBar" to="/shopping-cart">Shopping Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;