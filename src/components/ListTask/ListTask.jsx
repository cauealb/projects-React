import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"


export default function ListTask() {
    const { listTasks } = useContext(Context)

    return (
        <>
            {listTasks.map(item => (
                <Task 
                    key={item.id}
                    text={item.text}
                    finish={item.finish}
                />
            ))}
        </>
    )
}