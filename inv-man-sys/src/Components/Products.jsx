import Product from './Product';
import CardColumns from 'react-bootstrap/CardColumns';

function Products({ products, addToCart }) {

    return (
        <CardColumns>
            {products.map((product) =>
                <Product
                    id={product.id}
                    name={product.name}
                    price={product.price}
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