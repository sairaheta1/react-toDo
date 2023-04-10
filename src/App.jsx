import "./styles.css"
import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("") //setNewItem wil re-render ALL of JS

  const [todos, setTodos] = useState([]) //want an empty array for our TODOs

  function handleSubmit(e) {
    e.preventDefault() //prevents refreshing of page when adding new item

    setTodos((currentTodos) => { //update our array of todo items
      return [
        ...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item" id="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li>
      </ul>
    </>
  
  )
}
