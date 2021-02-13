import Product from './Product';

function Products({ products, addToCart }) {

    return (
        <div className="products">
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
        </div>
    )
}

export default Products;