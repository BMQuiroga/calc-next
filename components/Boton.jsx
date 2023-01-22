import style from '../styles/mios.module.css'
import { useAppContext } from './contexto'

export default function Boton(props){

    const cont = useAppContext()
    function clickHandler(){
        
        if(props.children === 'Clear'){
            
            cont.borrar()
        }
        else if(props.children === '='){
            
            cont.handleEvaluate()
            
        }else if(props.children === 'Ans'){
            
            cont.buttonAns()
        } else {
           
            cont.escribir(props.children)
        }           
    }

    return(
        <button className={(props.children.length>=3)?style.bigboton:style.boton} onClick={clickHandler}>
            {props.children}
        </button>
    )
}