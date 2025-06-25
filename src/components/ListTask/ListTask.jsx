import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"
import Task from "../Task/Task"


export default function ListTask() {
    const { listTasks } = useContext(Context)

    return (
        <>
            {listTasks.map(item => (
                <Task 
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    finish={item.finish}
                    edit={item.id}
                />
            ))}
        </>
    )
}