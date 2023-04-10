import "./styles.css"
import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  //setNewItem wil re-render ALL of JS

  return (
    <>
      <form className="new-item-form">
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
