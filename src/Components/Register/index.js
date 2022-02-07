import Container from '../Login/styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const navigate = useNavigate()

    function handleRegister(e) {
        e.preventDefault()
        if (form.password === form.confirm) {
            delete form.confirm
            const promisse = axios.post('http://localhost:5000/register', form)
            promisse.then(() => navigate('/'))
            promisse.catch(erro => {
                console.log(erro)
                alert(erro.response.data)
            })
        }
        else {
            alert('As senhas precisam ser iguais')
        }
    }

    function handleOnChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={handleRegister}>
                <input type="text"
                    name='name'
                    required
                    value={form.name}
                    placeholder="Nome"
                    onChange={handleOnChange}
                />
                <input type="email"
                    name='email'
                    required
                    value={form.email}
                    placeholder="E-mail"
                    onChange={handleOnChange}
                />
                <input type="password"
                    name='password'
                    required
                    value={form.password}
                    placeholder="Senha"
                    onChange={handleOnChange}
                />
                <input type="password"
                    name='confirm'
                    required
                    value={form.confirm}
                    placeholder="Confirme a senha"
                    onChange={handleOnChange}
                />
                <button>Cadastrar</button>
            </form>
            <Link to='/' >Já tem uma conta? Entre agora!</Link>
        </Container>
    )
}