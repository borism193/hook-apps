import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heavyStuff = (iterationNumber = 100) => {

    for ( let i = 0; i < iterationNumber; i++ ){
        console.log('prueba')
    } 


    return `numero de iteraciones ${iterationNumber}`
}


export const MemoHook = () => {
  
   const{ counter, addHandle } = useCounter(900)
   const [show, setShow] = useState(true)
  
   const memoValue = useMemo(() => heavyStuff(counter), [counter])
  
    return (

        <>
        
        <h1>counter: {counter}</h1>

        <hr />

        <h4>{memoValue}</h4>

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
