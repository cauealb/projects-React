import list from './listTask.module.css'

const tasks = [
    "Estudar React", "Estudar Angular"
]

function ListTask() {
    return (
        <>
            <div className={list.task}>
                {tasks.map((task) => {
                    return (
                        <li>{task}</li>
                    )
                })}
            </div>
        </>
    )
}

export default ListTask