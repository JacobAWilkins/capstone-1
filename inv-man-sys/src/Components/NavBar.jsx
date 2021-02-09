import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav>
                <Link to='/'><h1>Inventory Management System</h1></Link>
                <ul>
                    <li><Link className="navBar" to="/shopping-cart">Shopping Cart</Link></li>
                    <li><Link className="navBar" to="/product-detail">Product Detail</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;