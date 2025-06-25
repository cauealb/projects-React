import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"


export default function useNewTask() {
    const { newTask } = useContext(Context)


    return {
        newTask
    }
}