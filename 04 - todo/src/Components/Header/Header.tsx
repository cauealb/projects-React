import { PlusCircle } from 'phosphor-react'
import styleHeader from './HeadeStyle.module.css'
import logoTodo from  '../../assets/Logo todo.svg'
import { ContentTask } from '../ContentTask/ContentTask'
import { useState } from 'react'


export function Header() {
    const [changeTask, setChangeTask] = useState<string>('')

    return (
        <>  
            <header className={styleHeader.header}>
                <img className={styleHeader.logo} src={logoTodo} alt="Logo da todo" />   
                <form className={styleHeader.inputs__form}>
                    <input 
                        // onSubmit={handleSubmitNewTask}
                        onChange={(e) => setChangeTask(e.target.value)} 
                        className={styleHeader.taskname} 
                        type="text" 
                        required 
                        autoFocus
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
            <ContentTask changeTask={changeTask}/>
        </>
    )
}