import { PlusCircle } from 'phosphor-react'
import styleHeader from './HeadeStyle.module.css'
import logoTodo from  '../../assets/Logo todo.svg'
import { ContentTask } from '../ContentTask/ContentTask.tsx'
import { useState } from 'react'

interface NewTask {
    id: number
    dateCreate: Date
    content: string
    isComplete: boolean
}


export function Header() {
    
    const [task, setTask] = useState<NewTask[]>([])
    const [changeTask, setChangeTask] = useState<string>('')
    
    function handleSubmitNewTask() {
        event?.preventDefault()

        const newTask: NewTask = {
            id: new Date().getTime(),
            content: changeTask,
            dateCreate: new Date(),
            isComplete: false
        }
    
        setTask([...task, newTask])
        setChangeTask('')
    }

    function deleteTask(id: number) {
        const NewArray = task.filter((item) => item.id != id)
        setTask(NewArray)
    }

    function MarkTaskWhithComplete(id: number) {
        setTask(
            task.map((item) => {
                if(item.id === id) {
                    return { ...item, isComplete: true}
                } else {
                    return item
                }
            })
        )
    }

    function EditTask(id: number) {
        const arrayContent = task.find((item) => item.id === id)
        const current = arrayContent?.content || ''
        setChangeTask(current)

        const arrayEdit = task.filter((item) => item.id != id)
        setTask(arrayEdit)
    }

    function handleNotCompleteTask(id: number) {
        setTask(
            task.map((item) => {
                if (item.id === id) {
                    return { ...item, isComplete: false}
                } else {
                    return item
                }
            })
        )
    }

    return (
        <>  
            <header className={styleHeader.header}>
                <img className={styleHeader.logo} src={logoTodo} alt="Logo da todo" />   
                <form onSubmit={handleSubmitNewTask} className={styleHeader.inputs__form}>
                    <input
                        onChange={(e) => setChangeTask(e.target.value)} 
                        className={styleHeader.taskname} 
                        type="text" 
                        required 
                        autoFocus
                        value={changeTask}
                        autoComplete='off' 
                        placeholder="Adicione uma nova tarefa"
                    />
                    <button 
                        type='submit' 
                        disabled={!changeTask} 
                        className={styleHeader.btn}>
                            Criar <PlusCircle size={15}/>
                    </button>
                </form>
            </header>
            <ContentTask 
                task={task} 
                deleteTask={deleteTask} 
                completeTask={MarkTaskWhithComplete} 
                handleNotCompleteTask={handleNotCompleteTask}
                EditTask={EditTask}
            />
        </>
    )
}