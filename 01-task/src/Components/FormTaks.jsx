import { useState } from 'react'
import form from './FormTaks.module.css'
import { ListTaks } from './ListTaks'

export function FormTaks (){
    
    return (
        <section className={form.sect}>

            <form className={form.form}>
            <input name='task' type="text" placeholder='Beber àgua...' required/>
            <button type='submit'>Enviar</button>
        </form>

        <ListTaks />
        </section>
    )
}