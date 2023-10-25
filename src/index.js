import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const DATA = [
  { id: 'todo-0', name: 'Yemek', completed: true },
  { id: 'todo-1', name: 'Uyumak', completed: false },
  { id: 'todo-2', name: 'Tekrar Etmek', completed: false },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
)
