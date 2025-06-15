import { createContext } from "react";
const Provider = createContext()

export default function AppContext({ children }) {
    return (
        <Provider value={0}>
            {children}
        </Provider>
    )
}