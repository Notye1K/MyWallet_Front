import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext"
import Container from "./styles"

export default function Movement({type}){
    const navigate = useNavigate()

    const [form, setForm] = useState({
        description: '',
        value: ''
    })

    const {token} = useContext(UserContext)

    if(type === ''){
        navigate('/')
    }

    function handleSubmit(e) {
        e.preventDefault()
        let formNegative = {...form}
        if(type==='saida' && form.value>0){
            formNegative = {...form, value: new String (form.value*-1)}
        }
        const promisse = axios.post('http://localhost:5000/movements', formNegative, { headers: { Authorization: `Bearer ${token}` } })
        promisse.then(() => {
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

    return(
        <Container>
            <h1>Nova {type}</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" required name='value' value={form.value} onChange={handleOnChange} placeholder="Valor"/>
                <input type="text" required name='description' value={form.description} onChange={handleOnChange} placeholder="Descrição"/>
                <button> Salvar {type}</button>
            </form>
        </Container>
    )
}