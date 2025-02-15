import React, { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)


  const handleChange = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={handleChange}>Increment</button>
    </div>
  )
}

export default Counter