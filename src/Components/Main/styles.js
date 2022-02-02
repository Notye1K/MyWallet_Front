import styled from 'styled-components'

const Container = styled.div`

    height: 100vh;
    padding: 25px;
    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header{
        width: 326px;
        margin-bottom: 22px;

        display:flex;
        justify-content: space-between;

        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    main{
        width: 326px;
        height: 446px;
        border-radius: 5px;
        margin-bottom: 13px;

        background: #FFFFFF;
    }
    .empty{
        display: flex;
        align-items: center;

        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
    footer{
        width: 326px;

        display:flex;
        justify-content: space-between;
        button{
            width: 156px;
            height: 114px;
            padding: 10px;
            border: none;
            border-radius: 5px;

            background: #A328D6;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
            text-align: left;
        }
    }
`

export default Container