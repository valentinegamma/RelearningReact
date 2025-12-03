import React from 'react'

function Products(props) {
  return (
    <div>
      <h2>Pruduct: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default Products
