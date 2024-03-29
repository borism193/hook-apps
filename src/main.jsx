import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './06-useReducer/TodoApp'
//import { MemoHook } from './05-memos/MemoHook'
//import { Memorize } from './05-memos/Memorize'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-usestate/CounterApp'
//import { HooksApp } from './HooksApp'
//import { CallBackHook } from './05-memos/CallBackHook'
//import './05-useReducer/reducer-reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
)
