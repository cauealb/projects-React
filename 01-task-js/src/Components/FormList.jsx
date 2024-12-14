import { useState } from 'react'
import style from '../styles/FormList.module.css'
import ListTaks from './ListTaks.jsx'


function FormList() {

    const [task, setTaskAdd] = useState([
        "Estudar Programação"
    ])

    function handleSubmit () {
        event.preventDefault()

        setTaskAdd([...task, task])
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={style.form}>
                <input type="text" placeholder="Beber àgua..." required/>
                <button className={style.btn} type="subimit">Enviar</button>
            </form>
            <div className={style.main}>
                {task.map(task => {
                    return <ListTaks content={task}/>
                })}
            </div>
            
           
        </>
    )
}

export default FormList 