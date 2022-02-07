import Container from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import axios from 'axios'
import UserContext from "../../contexts/UserContext"


export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { setToken } = useContext(UserContext);

    function handleLogin(e) {
        e.preventDefault()
        const promisse = axios.post('http://localhost:5000/login', form)
        promisse.then(response => {
            setToken(response.data)
            localStorage.setItem("token", response.data)
            navigate('/main')
        })
        promisse.catch(erro => {
            console.log(erro.response.data)
            alert(erro.response.data)
        })
    }

    function handleOnChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={handleLogin}>
                <input type="email"
                    required
                    name='email'
                    value={form.email}
                    onChange={handleOnChange}
                    placeholder="E-mail"
                />
                <input type="password"
                    required
                    name='password'
                    value={form.password}
                    onChange={handleOnChange}
                    placeholder="Senha"
                />
                <button>Entrar</button>
            </form>
            <Link to='/register' >Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}