import './App.css'
import { useState } from 'react'
import TodoItem from './components/TodoItem'

function App () {
  const [todos, setTodos] = useState([
    { done: true, text: 'Take out the papers', notes: 'Remember to get the recycling from the kitchen and office' },
    { done: false, text: 'And the trash' },
    { done: false, text: 'Pick up some spending cash', notes: 'We need $100 for the fair this weekend' }
  ])

  function setTodoDone (todoIdx, done) {
    // todos[todoIdx].done = done
    const todoToUpdate = todos[todoIdx]
    let newTodos = todos.slice(0, todoIdx)
    newTodos.push({ ...todoToUpdate, done: done })
    newTodos = newTodos.concat(todos.slice(todoIdx + 1, todos.length))
    setTodos(newTodos)
  }

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
            return <TodoItem todo={todo} key={idx} handleUpdateDone={(done) => setTodoDone(idx, done)} />
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
