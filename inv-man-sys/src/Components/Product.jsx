import React from 'react';
import { Link } from 'react-router-dom';

function Product({ id, name, serNum, price, manufacturer, category, quantity, image, inCart, addToCart }) {

    return (
        <article>
            <div className="prodInfo">
                <Link to={'/' + id}><img className="prodPic" src={image} alt={name}/></Link>
                <h2 className="prodName" width="85%">
                    <Link to={'/' + id}>{name}</Link>
                </h2>
                <h4 className="prodPrice">{price}</h4>
            </div>
            <div>
                <section>
                    <button onClick={() => addToCart(id)}>
                        {inCart ? <p>In Cart</p> : <p>Add to Cart</p>}
                    </button>
                </section>
            </div>
        </article>
    )
}

export default Product;

