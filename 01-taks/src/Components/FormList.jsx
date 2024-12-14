import style from '../styles/FormList.module.css'
import ListTaks from './ListTaks'

function FormList() {
    return (
        <>
            <form className={style.form}>
                <input type="text" placeholder="Beber àgua..." required/>
                <button type="subimit">Enviar</button>
            </form>
            <ListTaks />
        </>
    )
}

export default FormList 