import ProductItem from "./ProductItem.jsx"

function ProductList({products}) {
    return (
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </ul> 
    )
}

export default ProductList