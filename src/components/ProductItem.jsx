

function ProductItem({product}) { 
    return ( 
        <li>
            {product.name}
            {product.price}
            {product.description}
        </li>
    )
}

export default ProductItem