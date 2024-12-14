import list from '../styles/ListTaks.module.css'

const task = [
    "Estudar Programação"
]

function ListTaks() {
    return (
        <>
            <div className={list.main}>
                {task.map(task => {
                    return (
                        <li>{task}</li>
                    )
                })}
            </div>
        </>
    )
}

export default ListTaks