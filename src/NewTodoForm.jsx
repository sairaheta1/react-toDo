import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("") //setNewItem wil re-render ALL of JS

  function handleSubmit(e) {
    e.preventDefault() //prevents refreshing of page when adding new item
    if (newItem === "") return
    onSubmit(newItem)
    setNewItem("")
  }
  return (
  <form onSubmit={handleSubmit}>
        <div>
          <label className="create-task" htmlFor="item" id="item">Add Task</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
        </div>
        <button className="btn">Create</button>
      </form>
  )
}