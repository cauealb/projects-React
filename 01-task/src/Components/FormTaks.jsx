import form from './FormTaks.module.css'

export function FormTaks (){
    return (
        <form className={form.form}>
            <input type="text" placeholder='Beber àgua...' required/>
            <button type='submit'>Enviar</button>
        </form>
    )
}