import React, { useState } from 'react'
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'
import ExampleThree from './components/ExampleThree'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'



const App = () => {
  
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} /> */}

        {/* <ExampleOne/> */}
        {/* <ExampleTwo/> */}
        {/* <ExampleThree/> */}
        {/* <Counter/>
        <TodoList/>
        <Profile/> */}
        <ShoppingList/>
    </div>
  );
}

export default App