
import { createContext, useState, useContext } from "react"
import { evaluate } from 'mathjs';

const AppContext = createContext({
    val: 0,
    escribir: (numero) => {},
    borrar: () => {},
    handleEvaluate: () => {},
    buttonAns: () => {},
   
})

export default function State({children}){
    const [val,setVal] = useState('0')
    const [ans,setAns] = useState('0')

    function escribir(num){
        setVal(val + num)
    }

    function borrar(){
        setVal('')
    }

    function handleEvaluate(){
        try{
            setVal(evaluate(val));
            setAns(evaluate(val))
          }
          catch{
            setVal('0')
            setAns('0')
          }
    }

    function buttonAns(){
        setVal(val + ans)
    }

    
    return(
        <AppContext.Provider
            value={{
                val,
                escribir: escribir,
                borrar: borrar,
                handleEvaluate: handleEvaluate,
                buttonAns: buttonAns,
               
                
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}

