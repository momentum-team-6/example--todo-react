import './App.css'
import { useState } from 'react'

function App () {
  const [todos, setTodos] = useState([
    { done: true, text: 'Take out the papers' },
    { done: false, text: 'And the trash' },
    { done: false, text: 'Pick up some spending cash' }
  ])

  const [hideCompleted, setHideCompleted] = useState(false)

  // function todoItemClassName (todo) {
  //   if (todo.done) {
  //     return 'todo-item-done'
  //   } else {
  //     return 'todo-item'
  //   }
  // }

  return (
    <div className='App'>
      <h1>
        Todos ({todos.length})
      </h1>
      <ul>
        {todos.map((todo, idx) => {
          if (!hideCompleted || !todo.done) {
            return (
              <li key={idx} className={todo.done ? 'todo-item-done' : 'todo-item'}>
                {todo.text}
              </li>
            )
          } else {
            return null
          }
        })}
      </ul>
      <div>
        <button onClick={() => setHideCompleted(!hideCompleted)}>
          {hideCompleted ? 'Show completed tasks' : 'Hide completed tasks'}
        </button>
        <button onClick={() => setTodos(todos.concat([{ done: false, text: 'Another todo' }]))}>
          Add another todo
        </button>
      </div>

    </div>
  )
}

export default App
