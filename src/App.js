import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Components/Login'
import Register from './Components/Register'
import Main from './Components/Main'


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register />} />
                <Route path='/main' element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}