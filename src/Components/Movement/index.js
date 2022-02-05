import Container from "./styles"

export default function Movement({type}){
    type = 'saida'
    // if type undefined navigate main
    return(
        <Container>
            <h1>Nova {type}</h1>
            <input type="number" placeholder="Valor"/>
            <input type="text" placeholder="Descrição"/>
            <button> Salvar {type}</button>
        </Container>
    )
}