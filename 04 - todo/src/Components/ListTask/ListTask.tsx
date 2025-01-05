import { useState } from 'react'
import styleList from './ListTask.module.css'
import Clipboard  from '../../assets/Clipboard.svg'
import { Trash } from 'phosphor-react'

export function ListTask () {
    
    return (
        <>
            <div className={styleList.alert_notask}>
                <img src={Clipboard}/>
                <div className={styleList.notask__infos}>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </>
    )
}
