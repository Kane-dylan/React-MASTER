import React from 'react'

const product = {
  name: "Laptop",
  price:1200,
  availability:"In Stock"
}

const ProductInfo = () => {
  return (
    <div>
      <h2>Name: {product.name}</h2>
      <h2>Price: ${product.price}</h2>
      <h2>Availability: {product.availability}</h2>
    </div>
  )
}

export default ProductInfo