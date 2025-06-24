import logo from '../../assets/Logo.svg'
import logoTitle from '../../assets/ToDo List.svg'
import './style/Header.css'
import useHeader from './useHeader'

export default function Header() {
    const { taskCreated, taskFinish } = useHeader()

    return(
        <header class="hero">
            <div class="nameCompany">
                <img src={logo} alt="Logo do ToDoList" />
                <img src={logoTitle} alt="Nome da Empresa" />
            </div>
            <div class="infosTask">
                <div class="taskCreate">
                    <p>Tarefas criadas</p>
                    <p>{taskCreated}</p>    
                </div>
                <div class="taskFinish">
                    <p>Concluídas</p>
                    <p>{`${taskFinish} de ${taskCreated}`}</p>  
                </div>
            </div>
        </header>
    )
}