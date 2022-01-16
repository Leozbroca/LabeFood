import styled from "styled-components";
import { Button } from '@material-ui/core';

export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerCard = styled.div`
    width: 328px;
    height: 112px;
    margin: 7px 0 0;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
    align-items: center;
`

export const DivButton = styled.div`
    height: 114px;
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    margin-left: 239px;

button{
    width: 90px;
    height: 31px;
    margin: 7px 0 0 0px;
    padding: 8px 20.5px 9px 21.5px;
    border-radius: 8px 0px 8px 0px;
    border: solid 1px red;
    background-color: white;
    color: red;
    :active{
        background-color: red;
        color: white;  
    }
}
    
`

export const DivImg = styled.div`
    display: flex;
    align-items: center;
    img{
    border-radius: 8px 0 0 8px;
    width: 96px;
    height: 112px;
    margin: 0 16px 0 0;
    object-fit: auto;
}
`

export const DivText = styled.div`
p{
    width: 200px;
}
`

export const DivQuant = styled.div`
    height: 146px;
    width: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    margin-left: 294px;
    p{
        border: 1px solid #5cb646;
        border-radius: 0px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33px;
        height: 33px;
    }
`

export const RenderCart = styled.div`
    margin-bottom: 70px;
`

export const DivTextAdress = styled.div`
    background-color: #eee;
    width: 100vw;
    max-width: 328px;
    height: 76px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div{
    }
    p{
        margin: 3px;
        margin-left: 16px;
    }
`

export const DivSubTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 328px;
`

export const DivPayment = styled.div`
    width: 328px;
    margin-bottom: 50px;
    div{
        margin-bottom: 5px;
    }
`

export const DivButtonStyled = styled.div`
    padding-bottom: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`

export const StyledButton = styled(Button)`
    width: 328px;
    height: 42px;
    padding: 12px 16px;
    border-radius: 2px;
`

export const DivTest = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    max-width: 328px;
    height: 240px;
    margin-bottom:10px;
    margin-top: 10px;
`

export const DivImagem = styled.img`
    width: 328px;
    height: 120px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    object-fit: auto;
`

export const DivCentralizando = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const DivNome = styled.div`
    color:#5cb646;
    margin:12px 16px 4px 16px;
    font-size:16px;
`

export const EsperaEFrete = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:0px 16px 0px 16px;
    color: #b8b8b8;
`