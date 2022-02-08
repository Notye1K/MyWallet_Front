import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext"
import Container from "./styles"

export default function Movement({ type, isEdit, id, formToEdit, setFormToEdit }) {
    const navigate = useNavigate()

    const { token } = useContext(UserContext)

    if (type === '') {
        navigate('/')
    }

    function handleSubmit(e) {
        e.preventDefault()
        let formNegative = { ...formToEdit }
        if (type === 'saida' && formToEdit.value > 0) {
            formNegative = { ...formToEdit, value: new String(formToEdit.value * -1) }
        }
        let promisse
        if (isEdit === 0) {
            promisse = axios.post('https://back--my-wallet.herokuapp.com/movements', formNegative, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } else {
            promisse = axios.put(`https://back--my-wallet.herokuapp.com/movements?transactionId=${id}`, formNegative, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
        promisse.then(() => {
            navigate('/main')
        })
        promisse.catch(erro => {
            console.log(erro.response.data)
            alert(erro.response.data)
        })
    }

    function handleOnChange(e) {
        setFormToEdit({ ...formToEdit, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <h1>{isEdit === 0 ? 'Nova' : 'Editar'} {type}</h1>
            <form onSubmit={handleSubmit}>
                <input type="number"
                    required
                    name='value'
                    value={formToEdit.value}
                    onChange={handleOnChange}
                    placeholder="Valor"
                />
                <input type="text"
                    required
                    name='description'
                    value={formToEdit.description}
                    onChange={handleOnChange}
                    placeholder="Descrição"
                />
                <button> {isEdit === 0 ? 'Salvar' : 'Atualizar'} {type}</button>
            </form>
        </Container>
    )
}