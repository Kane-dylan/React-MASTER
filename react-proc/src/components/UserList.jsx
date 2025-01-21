import React from 'react'

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

const UserList = () => {
  return (
    <div>
      {users.map((user)=>(
        <div key={user.id}>
          {/* <li>{user.id}</li> */}
          <h3>Name:{user.name}</h3>
          <h3>Age:{user.age}</h3>
        </div>
      ))}
    </div>
  )
}

export default UserList