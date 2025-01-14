import { Route, Routes } from "react-router"
import { HeaderDefault } from "./Components/HederDefault/HeaderDefault"

export function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HeaderDefault />}>
                    
                </Route>
            </Routes>
        </>
    )
}