import styled from "styled-components";
import { TextField } from '@material-ui/core';

// Estilização da página

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
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

export const DivTest = styled.div`
    display:flex;
    flex-direction: column;
    width: 80vw;
    max-width: 328px;
    height: 230px;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    margin-bottom:10px;
    cursor: pointer;
`

export const DivImagem = styled.img`
    width: 100%;
    height: 170px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    object-fit: auto;
`

export const DivCentralizando = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-bottom:60px;
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

export const StyledInput = styled(TextField)`
  width: 80vw;
  max-width: 328px;
  height: 56px;
`