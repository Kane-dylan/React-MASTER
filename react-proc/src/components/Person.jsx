import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h2>The Dev Name is :  {props.name}</h2>
      <p>My age is {props.age}</p>
    </div>
  )
}

export default Person