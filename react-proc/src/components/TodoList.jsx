import React, { useEffect, useState } from 'react'

const TodoList = () => {

  const [todo, setTodo] = useState(() => {
    const saveTodo = localStorage.getItem('todo');
    return saveTodo ? JSON.parse(saveTodo) : "";
  })

  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const handleAddTask = () => {
    setTodo(todo)
  }

  const handleTask = (event) => {
    setTodo(event.target.value)
  }

  return (
    <div>
      <h1>Todo List :{todo}</h1>
      <input
        type="text"
        value={todo}
        onChange={handleTask}
        placeholder="Add your task"
      ></input>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TodoList