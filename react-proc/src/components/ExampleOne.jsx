import React, { useState } from 'react'

const ExampleOne = () => {

const [count, setCount] = useState(()=>{
  const incrementCount = 10
  return incrementCount
})

const increment = () => {
  setCount((p)=>p+1)
}

  return (
    <div>
      <h1>Initial Count : {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default ExampleOne