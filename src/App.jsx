import { NewTodoForm } from "./NewTodoForm"
import { useEffect, useState } from "react"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function App() {
  

  const [todos, setTodos] = useState(() => { //get list of items from local storage so it wont refresh
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  
  function addTodo(title) {
    setTodos((currentTodos) => { //update our array of todo items
      return [
        ...currentTodos, {id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />
    <NewTodoForm onSubmit={addTodo}/>
    <div className="list">
      <h1 className="header">Todo List</h1>
      <TodoList className="help" todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
    </>
  
  )
}
