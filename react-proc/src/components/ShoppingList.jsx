import React, { useState } from 'react'

const ShoppingList = () => {

  const [name, setName] = useState(() => {
    const ItemName = localStorage.getItem("name");
    return ItemName ? JSON.parse(ItemName) : "";
  })

  const handleItem = () => {
    setName()
  }

  const handleAddItem = (e) => {
    const item = e.target.value
    setName(item)
  }
  const [quantity, setQuantity] = useState(() => {
    const ItemQuantity = []
    return ItemQuantity
  })
  return (
    <div>
      <h1>Shopping Item:{name}</h1>
      <p>Quantity :{quantity}</p>
      <form action="Add">
        <input type='text' value={name} onChange={handleAddItem} placeholder='Add items to cart'></input>
        <button onClick={handleItem}>Add item</button>
      </form>
    </div>
  )
}

export default ShoppingList