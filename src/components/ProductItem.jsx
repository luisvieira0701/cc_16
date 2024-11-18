import {ProductList} from './ProductList.jsx'
import {App} from './App.jsx'

function ProductItem({product}) { 
    return ( 
    <>
        <li>
            {product.name}
            {product.price}
            {product.description}
        </li>
    </>
    )
}

export default ProductItem