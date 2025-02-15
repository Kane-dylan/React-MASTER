import React, { useState } from 'react'

const Profile = () => {

  const [ name, setName] = useState(() => {
    const initialName = 'John Doe'
  
    return initialName

  })
  const [ age, setAge] = useState(() => {
    const initialAge = 25

    return initialAge

  })

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age :{age}</p>
    </div>
  )
}

export default Profile