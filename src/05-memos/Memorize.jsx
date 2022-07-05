import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
  
   const{ counter, addHandle } = useCounter(0)
   const [show, setShow] = useState(true)
  
  
    return (

        <>
        
        <h1>counter: <Small value={counter}/></h1>

        <hr />

        <button
        className='btn btn-primary'
        onClick={() => addHandle()}
        >
                +1
        </button>

        <button 
            className='btn btn-outline-primary'
            onClick={() => setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
        
        </>
  
  )
}
