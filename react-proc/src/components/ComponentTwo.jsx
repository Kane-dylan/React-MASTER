import React from 'react'

const ComponentTwo = ({count, onClickHandler}) => {

  const handleClick = () => onClickHandler()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Decrement</button>
    </div>
  )
}

export default ComponentTwo