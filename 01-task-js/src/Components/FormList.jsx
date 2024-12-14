import { useState } from 'react'
import style from '../styles/FormList.module.css'
import ListTaks from './ListTaks.jsx'


function FormList() {

    const [task, setTaskAdd] = useState([])
    const [taskChange, setTaskChange] = useState('')

    function handleSubmit () {
        event.preventDefault()

        setTaskAdd([...task, taskChange])
        setTaskChange('')
    }

    function handleChangeNewTask() {
        console.log(event.target.value)
        setTaskChange(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={style.form}>
                <input value={taskChange} onChange={handleChangeNewTask} type="text" placeholder="Beber àgua..." required/>
                <button className={style.btn} type="subimit">Enviar</button>
            </form>
            <div className={task.length > 0 ? style.main : style.mainHidden}>
                {task.map(task => {
                    return <ListTaks content={task}/>
                })}
            </div>
            
           
        </>
    )
}

export default FormList 