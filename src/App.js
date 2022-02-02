import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Components/Login'
import Register from './Components/Register'
import Main from './Components/Main'
import Movement from './Components/Movement'


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register />} />
                <Route path='/main' element={<Main />} />
                <Route path='/movement' element={<Movement />} />
            </Routes>
        </BrowserRouter>
    )
}