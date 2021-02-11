import Product from './Product';

function Products({ products, addToCart }) {

    return (
        <div className="products">
            {products.map((product) =>
                <Product 
                    id={product.id}
                    name={product.name}
                    serNum={product.serNum}
                    price={product.price}
                    manufacturer={product.manufacturer}
                    category={product.category}
                    quantity={product.quantity}
                    image={product.image}
                    inCart={product.inCart}
                    addToCart={addToCart}
                />
            )}
        </div>
    )
}

export default Products;