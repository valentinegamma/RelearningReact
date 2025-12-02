import React from 'react'

const Lists = () => {
  const list = [1,2,3,4,5];
  return (
    <div>
      {list.map((number, index) => (
        <ul key={index}>
          <li>{number}</li>
         </ul>
      ))}
    </div>
  )
}

export default Lists
