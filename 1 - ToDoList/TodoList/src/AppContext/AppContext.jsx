import { createContext } from "react";
import useHeader from "../components/Header/useHeader";

export const Context = createContext({
    taskFinish: 0,
    setTaskFinish: () => {},
    handleTaskFinish: () => {}
})

export default function AppContext({ children }) {
    const { taskFinish, setTaskFinish, handleTaskFinish } = useHeader()
    
    return (
        <Context.Provider value={
            {
                taskFinish, 
                setTaskFinish,
                handleTaskFinish
            }
        }>
            {children}
        </Context.Provider>
    )
}