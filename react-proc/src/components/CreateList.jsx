import React from 'react'

const number = [1,2,3,4,5]

const CreateList = () => {
  return (
    <main>
      {number.map((number)=>(
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
    </main>
  )
}

export default CreateList