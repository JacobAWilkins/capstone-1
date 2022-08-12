import Product from './Product';
import CardColumns from 'react-bootstrap/CardColumns';

function Products({ products, addToCart }) {

    return (
        <CardColumns>
            {products.map((product) =>
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    cartQuantity={product.cartQuantity}
                    image={product.image}
                    inCart={product.inCart}
                    addToCart={addToCart}
                />
            )}
        </CardColumns>
    )

}

export default Products;