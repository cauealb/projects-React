import style from '../styles/FormList.module.css'

function FormList() {
    return (
        <>
            <form className={style.form}>
                <input type="text" placeholder="Beber àgua..." required/>
                <button type="subimit">Enviar</button>
            </form>
        </>
    )
}

export default FormList 