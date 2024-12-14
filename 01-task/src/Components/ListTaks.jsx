import { useState } from 'react'
import list from './ListTaks.module.css'

const lista = [
    "Estudar React", "Limpar Casa"
]

export function ListTaks (){

    return (
        <>
            <div className={list.container}>
                {lista.map((li) => {
                    return (
                        <li className={list.taks}>
                                {li}
                        </li>
                    )
                })}
            </div>
        </>
    )
}