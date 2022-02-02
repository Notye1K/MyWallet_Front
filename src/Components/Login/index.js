import Container from './styles'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <Container>
            <h1>MyWallet</h1>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
            <Link to='/register' >Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}