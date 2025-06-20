import { useContext, useState } from "react";
import { Context } from "../../AppContext/AppContext";


export default function useHeader() {
    const {  } = useContext(Context)
    const [taskFinish, setTaskFinish] = useState(0)

    function incrementTaskFinish() {
        
    }


    return {
        taskFinish
    }

}