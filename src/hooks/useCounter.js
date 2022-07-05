import { useState } from "react";

export const useCounter = (initaialValue = 0) => {
    
    const [counter, setcounter] = useState(initaialValue)


    const addHandle = (value = 1) => {
        setcounter(counter+value)
    }
       
    
    const substratcHandle = (value = 1) => {

        if (counter == 1) return
        setcounter(counter-value)
    }

    const resetCounter = () => {
        setcounter(initaialValue)
    }

    return{
        counter,
        addHandle,
        substratcHandle,
        resetCounter
    }


}