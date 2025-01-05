import { Rocket } from 'phosphor-react'
import styleHeader from './HeadeStyle.module.css'

export function Header() {
    return (
        <>
            <header className={styleHeader.header}>
                <div className={styleHeader.hero}>
                    <Rocket size={34} color="#8284FA"/>
                    <div className={styleHeader.logo}>
                        <span className={styleHeader.logo_1}>to</span><span className={styleHeader.logo_2}>do</span>
                    </div>
                </div>
                <form>
                    <input className={styleHeader.taskname} type="text" placeholder="Adicione uma nova tarefa"/>
                    <button className={styleHeader.btn}>Criar</button>
                </form>
            </header>
        </>
    )
}