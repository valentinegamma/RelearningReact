import React from 'react'

const Greeting = () => {
  const name = "Valentine Gamma";
  return (
    <div>
      <h1>Hello!</h1>
      <p>Today's date is {new Date().toLocaleDateString()}</p>
      <p>my name is {name}</p>
    </div>
  )
}

export default Greeting
