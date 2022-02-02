import Container from '../Login/styles'
import { Link } from 'react-router-dom'

export default function Register(){
    return(
        <Container>
            <h1>MyWallet</h1>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a senha" />
            <button>Cadastrar</button>
            <Link to='/' >Já tem uma conta? Entre agora!</Link>
        </Container>
    )
}