import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }
    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        padding-left: 15px;
        border: none;
        border-radius: 5px;
        margin-top: 13px;

        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border: none;
        border-radius: 5px;
        margin-top: 13px;

        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
    p{
        margin-top: 36px;

        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`

export default Container
