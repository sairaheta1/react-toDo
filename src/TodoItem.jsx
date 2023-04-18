export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="item">
      <label className="item-label">
        <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
        {title}
      </label>
      <button className="btn btn-delete" onClick={() => deleteTodo(id)}>X</button>
    </li>
  )
}