import { PlusCircle } from 'phosphor-react'
import styleHeader from './HeadeStyle.module.css'
import logoTodo from  '../../assets/Logo todo.svg'
import { ListTask } from '../ListTask/ListTask'

export function Header() {
    return (
        <>  
            <header className={styleHeader.header}>
                <img className={styleHeader.logo} src={logoTodo} alt="Logo da todo" />   
                <form>
                    <input className={styleHeader.taskname} type="text" required autoFocus autoComplete='off' placeholder="Adicione uma nova tarefa"/>
                    <button disabled className={styleHeader.btn}>Criar <PlusCircle size={15}/></button>
                </form>
            </header>
            <ListTask />
        </>
    )
}