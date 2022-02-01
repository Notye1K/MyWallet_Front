import Container from './styles'

export default function Login(){
    return(
        <Container>
            <h1>MyWallet</h1>
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Senha" />
            <button>Entrar</button>
            <p>Primeira vez? Cadastre-se!</p>
        </Container>
    )
}