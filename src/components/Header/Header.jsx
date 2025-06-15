import useHeader from "./useHeader"
import logo from '../../assets/Logo.svg'
import logoTitle from '../../assets/ToDo List.svg'
import './style/Header.css'

export default function Header() {
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