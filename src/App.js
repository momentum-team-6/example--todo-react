import './App.css'
import { useState } from 'react'

function App () {
  const [todos, setTodos] = useState([
    'Take out the papers',
    'And the trash',
    'Pick up some spending cash'
  ])

  return (
    <div className='App'>
      <h1>Todos ({todos.length})</h1>
      <List items={todos} />
      <div>
        <button onClick={() => {
          setTodos(todos.concat(['New task']))
        }}
        >Add a new task
        </button>
      </div>
    </div>
  )
}

function List ({ items }) {
  return (
    <ul>
      {items.map(function (item, idx) {
        return <li key={idx}>{item}</li>
      })}
    </ul>
  )
}

export default App
