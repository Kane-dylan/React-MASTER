import React, { useState } from 'react'

const App = () => {

  const [friends, setFriends] = useState(["john" , "peter" , "susan"])
  const addNewFriend = () => setFriends([...friends, "jane"])
  const removeFriend = () => setFriends(friends.filter((f) => f !== "jane"))

  const updateFriend = () => {
    setFriends(friends.map((f)=> (f === "jane" ? "jane doe" : f)))
  }
  
  return (
    <div>
      {friends.map((f)=>(
    <li key={Math.random()}>{f}</li>
    ))}
      <button onClick={addNewFriend}>Add another friend </button>
      <button onClick={removeFriend}>Remove one friends</button>
      <button onClick={updateFriend}>Update one friend</button>
    </div>
  )
}

export default App