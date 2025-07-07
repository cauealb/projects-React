import { useContext } from "react";
import { Context } from "../../AppContext/AppContext";


export default function useHeader() {
    const { taskCreated, taskFinish } = useContext(Context)

    return {
        taskCreated,
        taskFinish
    }
}