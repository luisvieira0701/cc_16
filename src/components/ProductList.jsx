import {App} from './App.jsx'

function ProductList({products}) {
    return (
        <>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </ul>
        </> 
    )
}

export default ProductList