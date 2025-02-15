import React, { useState } from 'react'

const ExampleTwo = () => {
  
  const [randomNumber, setRandomNumber] = useState(()=>{
    const random = Math.floor(Math.random() * 100)
    return random
  })

  const changeNumber = () => {
    const newNumber = Math.floor(Math.random() * 100)
    setRandomNumber(newNumber)
  }

  return (
    <div>
      <h1>The Random Number :{randomNumber}</h1>
      <button onClick={changeNumber}>Change</button>
    </div>
  )
}

export default ExampleTwo