import React from 'react'

const Props = () => {
  return <User  
  name="Rahul Kumar" 
  age= {25}
  isMarried = {false}
  hobbies= {["nothing,",  " also_nothing"]}
/>
}

const User = ({name, age, isMarried, hobbies}) => {
  
  return <section>

      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>Marriage:{isMarried}</h1>
      <h1>Hobbies:{hobbies}</h1>
  </section>
}

export default Props