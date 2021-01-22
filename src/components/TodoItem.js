import { useState } from 'react'

function TodoItem (props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const { todo, handleUpdateDone } = props

  return (
    <li className={todo.done ? 'todo-item-done' : 'todo-item'}>
      <p>
        <input type='checkbox' checked={todo.done} onChange={e => handleUpdateDone(e.target.checked)} />
        {todo.text}
      </p>

      <p style={{ fontSize: '80%' }}>
        {isExpanded
          ? <div>{todo.notes}<button onClick={() => setIsExpanded(false)}>Hide notes</button></div>
          : <button onClick={() => setIsExpanded(true)}>Show notes</button>}
      </p>

    </li>
  )
}

export default TodoItem
