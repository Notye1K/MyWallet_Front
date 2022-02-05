import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react"

import Login from './Components/Login'
import Register from './Components/Register'
import Main from './Components/Main'
import Movement from './Components/Movement'
import UserContext from "./contexts/UserContext"


export default function App(){
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [type, setType] = useState('')

    return(
        <UserContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/main' element={<Main setType={setType} />} />
                    <Route path='/movement' element={<Movement type={type} />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}