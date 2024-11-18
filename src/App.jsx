import { useState } from 'react'

import './App.css'

const products = [
  {id: 1, name: 'Laptop', price: 1000, description: 'Maccbook Pro'},
  {id: 2, name: 'Phone', price: 1000, description: 'Iphone 16 pro'},
  {id: 3, name: 'Smart Watch', price: 1000, description: 'Apple Watch'},
  {id: 4, name: 'Desktop', price: 1000, description: 'Macbook Air'},
  {id: 5, name: 'Tech Glasses', price: 1000, description: 'Apple Glasses',}
]
function App() {
  const [products, setProducts] = useState(products)

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }
  return (
    <>
      <ProductList products={products}/>
      <br/>
      <AddProductForm onAddProduct={handleAddProduct}/>
    </>
  )
}

export default App
