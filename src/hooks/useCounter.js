import { useState } from "react";

export const useCounter = (initaialValue = 0) => {
    const [counter, setcounter] = useState(initaialValue)


    const addHandle = (value = 0) => {
        setcounter(counter+value)
    }
       
    
    const substratcHandle = (value = 0) => {

        if (counter == 0) return
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