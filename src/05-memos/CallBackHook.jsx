import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {
  
    const [counter, setcounter] = useState(0)

    const incrementF = useCallback(
      () => {
        setcounter((value) => value+1)
      },
      [],
    )
    
  
    /* const incrementF = () => {
        setcounter(counter+1)
    } */
    return (
    <>
        <h1>CallBackHook {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementF}/>
    </>
  )
}
