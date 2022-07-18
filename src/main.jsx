import React from 'react'
import ReactDOM from 'react-dom/client'
import { CallBackHook } from './05-memos/CallBackHook'
//import { MemoHook } from './05-memos/MemoHook'
//import { Memorize } from './05-memos/Memorize'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-usestate/CounterApp'
//import { HooksApp } from './HooksApp'
import './index.css'
import './05-useReducer/reducer-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallBackHook />
  </React.StrictMode>
)
