import style from '../styles/mios.module.css'
import Boton from './Boton'
import Pantalla from './Pantalla'

export default function Calculadora(){
    return(
        <div className={style.calculadora}>
            <div className={style.row}>
                <Pantalla></Pantalla>
            </div>

            <div className={style.row}>
                <Boton>7</Boton>
                <Boton>8</Boton>
                <Boton>9</Boton>
                <Boton>*</Boton>
            </div>

            <div className={style.row}>
                <Boton>4</Boton>
                <Boton>5</Boton>
                <Boton>6</Boton>
                <Boton>-</Boton>
            </div>

            <div className={style.row}>
                <Boton>1</Boton>
                <Boton>2</Boton>
                <Boton>3</Boton>
                <Boton>+</Boton>
            </div>

            <div className={style.row}>
                <Boton>=</Boton>
                <Boton>0</Boton>
                <Boton>.</Boton>
                <Boton>/</Boton>
            </div>

            <div className={style.row}>
                <Boton>Clear</Boton>
                <Boton>Ans</Boton>

            </div>
        </div>
    )

}