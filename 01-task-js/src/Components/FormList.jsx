import { useState } from 'react'
import style from '../styles/FormList.module.css'
import ListTaks from './ListTaks.jsx'


function FormList() {

    const [task, setNewTaks] = useState([])
    const [taskChange, setTaskChange] = useState('')

    function handleSubmit() {
        event.preventDefault()

        setNewTaks([...task, taskChange])

        setTaskChange('')
    }

    function handleChangeNewComment() {
        setTaskChange(event.target.value)
    }

    function deleteComment(comment) {
        const newArray = task.filter(line => {
            return line != comment
        })

        setNewTaks(newArray)
    }


    return (
        <>
            <form onSubmit={handleSubmit} className={style.form}>
                <input value={taskChange} onChange={handleChangeNewComment} type="text" placeholder="Beber àgua..." required/>
                <button className={style.btn} type="subimit">Enviar</button>
            </form>
            <div className={task.length > 0 ? style.main : style.mainHidden}>
                {task.map(task => {
                    return <ListTaks key={task} content={task} onDeleteComment={deleteComment}/>
                })}
            </div>
            
           
        </>
    )
}

export default FormList 