import React from 'react'

const ProductInfo = () => {
  const product = {
    name: 'laptop',
    price: 1200,
    avilability: 'in stock' 
  }
  return (
    <div>
      {product.name} costs ${product.price} and is {product.avilability}
    </div>
  )
}

export default ProductInfo
