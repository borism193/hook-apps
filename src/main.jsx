import React from 'react'
import ReactDOM from 'react-dom/client'
import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-usestate/CounterApp'
//import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FocusScreen />
  </React.StrictMode>
)
