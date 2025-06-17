import { createContext } from "react";
import useHeader from "../components/Header/useHeader";

export const Context = createContext({
    taskFinish: 0,
    handleTaskFinish: () => {}
})

export default function AppContext({ children }) {
    const { taskFinish, handleTaskFinish } = useHeader()
    
    return (
        <Context.Provider value={
            {
                taskFinish, 
                handleTaskFinish
            }
        }>
            {children}
        </Context.Provider>
    )
}