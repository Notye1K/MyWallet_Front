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
        padding: 23px 11px 10px 12px;
        border-radius: 5px;
        margin-bottom: 13px;

        background: #FFFFFF;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line{
            width: 100%;
            
            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #000000;

            display: flex;
            justify-content: space-between;

            .date{
                margin-right: 10px;

                color: #C6C6C6;
            }
            button{
                border: none;
                background-color: white;
                color: #C6C6C6;
            }
        }
        .total{
            display: flex;
            justify-content: space-between;

            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 20px;
            .bold{
                font-weight: bold;
                color: #000000;
            }
        }
        .negative{color: #C70000;}
        .positive{color: #03AC00;}
    }
    .empty{
        display: flex;
        align-items: center;
        justify-content: center;

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