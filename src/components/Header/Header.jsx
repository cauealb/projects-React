import { useContext } from 'react'
import logo from '../../assets/Logo.svg'
import logoTitle from '../../assets/ToDo List.svg'
import './style/Header.css'
import { Context } from '../../AppContext/AppContext'

export default function Header() {
    const {  } = useContext(Context)

    return(
        <header class="hero">
            <div class="nameCompany">
                <img src={logo} alt="Logo do ToDoList" />
                <img src={logoTitle} />
            </div>
            <div>
                <div class="taskCreate">
                    <p>Tarefas criadas</p>
                    <p>0</p>    
                </div>
                <div class="taskFinish">
                    <p>Concluídas</p>
                    <p>0</p>  
                </div>
            </div>
        </header>
    )
}