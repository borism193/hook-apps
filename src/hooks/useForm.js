import { useState } from "react"

export const useForm = (initialForm = {}) => {
  
    const [formState, setformState] = useState(initialForm)

  const onResetForm = () => {
    setformState(initialForm)
  }

    const oninputChange = ({target}) => {
        const {name,value} = target
        setformState({
            ...formState,
            [name]: value
        })
    }
  
  
    return{

        ...formState,
        formState,
        oninputChange,
        onResetForm
    }
}
