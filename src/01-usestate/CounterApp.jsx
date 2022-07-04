import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const {counter, resetCounter,substratcHandle,addHandle} = useCounter()
    
    return (
        <>

        <h1>counter: {counter}</h1>


        <hr />

        <button className="btn" onClick={addHandle} >+1</button>
        <button className="btn" onClick={resetCounter}>reset</button>
        <button className="btn" onClick={substratcHandle}>-1</button>

   </>
  )
}
