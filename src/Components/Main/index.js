import Container from './style'
import plus from './images/plus.svg'
import minus from './images/minus.svg'
import logout from './images/logout.svg'

export default function Mani(){
    return(
        <Container>
            <header>
                <h1>Olá, Fulano</h1>
                <img src={logout} alt="logout" />
            </header>
            <main className='empty'>
                Não há registros de
                entrada ou saída
            </main>
            <footer className='buttons'>
                <button>
                    <img src={plus} alt="plus" />
                    <p>Nova <br /> entrada</p>
                </button>
                <button>
                    <img src={minus} alt="minus" />
                    <p>Nova <br /> saída</p>
                </button>
            </footer>
        </Container>
    )
}