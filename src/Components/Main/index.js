import Container from './styles'
import plus from './images/plus.svg'
import minus from './images/minus.svg'
import logout from './images/logout.svg'

import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

let tokenGlobal

export default function Main({ setType, setIsEdit, setId, setFormToEdit }) {
    const { token } = useContext(UserContext)
    tokenGlobal = token

    const [name, setName] = useState('')
    const [trasactions, setTrasactions] = useState([])
    const [refresh, setRefresh] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const promisse = axios.get('https://back--my-wallet.herokuapp.com/account', { headers: { Authorization: `Bearer ${token}` } })
        promisse.then(response => {
            setName(response.data.name)
            setTrasactions(response.data.movements)
        })
        promisse.catch(erro => {
            console.log(erro.response.data);
            alert(erro.response.data)
            navigate('/')
        })
    }, [token, navigate, refresh])

    let total = 0
    trasactions?.map(v => total += parseInt(v.value))
    total = total.toFixed(2)

    return (
        <Container>
            <header>
                <h1>Olá, {name}</h1>
                <img src={logout} alt="logout" onClick={() => {
                    navigate('/')
                }} />
            </header>
            <main className={!trasactions ? 'empty' : ''}>
                <div className="lines">
                    {!trasactions ? 'Não há registros de entrada ou saída' :
                        trasactions.map((v) => <Trasactions
                            refresh={refresh}
                            setRefresh={setRefresh}
                            key={v.id}
                            datas={v}
                            setType={setType}
                            setIsEdit={setIsEdit}
                            setId={setId}
                            navigate={navigate}
                            setFormToEdit={setFormToEdit}
                        />)}
                </div>
                {trasactions && <div className="total">
                    <span className='bold'>
                        Saldo
                    </span>
                    <span className={total < 0 ? 'negative' : 'positive'}>
                        {total}
                    </span>
                </div>}
            </main>
            <footer className='buttons'>
                <button onClick={() => {
                    setIsEdit(0)
                    setType('entrada')
                    setFormToEdit({
                        description: '',
                        value: ''
                    })
                    navigate('/movement')
                }}>
                    <img src={plus} alt="plus" />
                    <p>Nova <br /> entrada</p>
                </button>
                <button onClick={() => {
                    setIsEdit(0)
                    setType('saida')
                    setFormToEdit({
                        description: '',
                        value: ''
                    })
                    navigate('/movement')
                }}>
                    <img src={minus} alt="minus" />
                    <p>Nova <br /> saída</p>
                </button>
            </footer>
        </Container>
    )
}

function Trasactions({ datas, setRefresh, refresh, setIsEdit, setType, setId, navigate, setFormToEdit }) {
    return (
        <div className='line'>
            <div onClick={() => {
                setIsEdit(1)
                setId(datas.id)
                setFormToEdit({
                    description: datas.description,
                    value: datas.value
                })
                if (datas.value > 0) {
                    setType('entrada')
                } else {
                    setType('saida')
                }
                navigate('/movement')
            }}><span className='date'>{datas.time}</span>{datas.description}</div>
            <span className={datas.value < 0 ? 'negative' : 'positive'}>
                {parseFloat(datas.value.replace('-', '')).toFixed(2)}
                <button onClick={() => handleDelete(datas.id, setRefresh, refresh, datas.description)}>x</button>
            </span>
        </div>
    )
}

function handleDelete(id, setRefresh, refresh, description) {
    if (!window.confirm(`Tem certeza que deseja excluir "${description}"?`)) {
        return
    }
    const promisse = axios.delete(`https://back--my-wallet.herokuapp.com/movements?transactionId=${id}`, {
        headers: {
            Authorization: `Bearer ${tokenGlobal}`
        }
    })
    promisse.then(() => {
        setRefresh(!refresh)
    })
    promisse.catch(erro => {
        console.log(erro.response.data);
        alert(erro.response.data)
    })
}