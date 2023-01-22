import style from '../styles/mios.module.css'
import { useAppContext } from './contexto'

export default function Pantalla(){
    const cont = useAppContext()
    return(
        <div className={style.pantalla}>
           <h3>{cont.val}</h3>
        </div>
    )
}