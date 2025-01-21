import React from 'react'

const name = "John"
const current = new Date();
const date = current.toLocaleString();


const Greeting = () => {
  return (
    <div>
      <h1>Hello, Good Morning {name} !</h1>
      <p>currentDate:{date}</p>
    </div>
  )
}

export default Greeting