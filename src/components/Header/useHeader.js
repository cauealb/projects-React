import { useContext } from "react";
import { Context } from "../../AppContext/AppContext";


export default function useHeader() {
    const { taskCreated } = useContext(Context)

    return {
        taskCreated
    }
}