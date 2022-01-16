import styled from "styled-components";
import { TextField } from '@material-ui/core';

// Estilização da página

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivCategories = styled.div`
    display: flex;
    margin-top: 10px;
    width: 80vw;
    max-width: 328px;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: #fff; 
    border-radius: 2px;
        }
    p{
        margin-right: 10px;
        margin-top: 10px;
        cursor: pointer;
    }
`

// Estilização dos cards

export const DivCards = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-bottom:60px;
`


export const StyledInput = styled(TextField)`
    width: 80vw;
    max-width: 328px;
    height: 56px;
`

export const DivForm = styled.form`
    margin-top:20px;
`

export const DivOrder = styled.div `
    width: 100vw;
    height: 125px;
    background-color: #5cb646;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 60px;
`

export const DivOrderInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    p {
        margin: 4.5px;
        font-size: 18px;
    }
    span {
        font-weight: bolder
    }
`