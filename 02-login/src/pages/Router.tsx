import {Routes, Route} from 'react-router'
import { Home } from '../pages/Home/Home'
import { Infos } from './Infos/Infos'

export function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/infos' element={<Infos />} />
            </Routes>
        </>
    )
}