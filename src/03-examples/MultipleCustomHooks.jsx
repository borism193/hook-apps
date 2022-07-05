import { useCounter,useFetch } from "../hooks"
import {Quote,LoadingQuote} from './'

export const MultipleCustomHooks = () => {
  
    const {counter, addHandle} = useCounter (1)
  
  const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  
  const {author,quote} = !!data && data[0]


    return (
        <>
        
        <h1>BreakingBad Quotes</h1>

        <hr />

        {
           isLoading
           ?<LoadingQuote/>
           :<Quote author={author} quote={quote}/>
          
        }

        
        

        <button className="btn btn-primary" 
        onClick={() => addHandle()}
        disabled={isLoading}>
            next quote
        </button>

        
        </>
  )
}
