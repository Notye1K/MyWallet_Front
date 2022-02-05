import styled from 'styled-components'

const Container = styled.div`

    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        width: 326px;
        margin-bottom: 40px;

        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            margin-bottom: 13px;

            width: 326px;
            height: 58px;
            padding-left: 15px;
            border: none;
            border-radius: 5px;

            background: #FFFFFF;

            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }
        button{
            width: 326px;
            height: 46px;
            border: none;
            border-radius: 5px;

            background: #A328D6;

            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
    }
`

export default Container
