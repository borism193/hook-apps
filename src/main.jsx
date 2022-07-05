import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-usestate/CounterApp'
//import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>
)
