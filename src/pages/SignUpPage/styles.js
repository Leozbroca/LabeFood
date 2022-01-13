import styled from "styled-components";
import { Button, TextField } from '@material-ui/core';

// Estilização dos inputs e botão do material ui 

export const DivForm = styled.div`
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
  }
`

export const StyledButton = styled(Button)`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
`

export const StyledInput = styled(TextField)`
  width: 328px;
  height: 56px;
`

// Estilização da página

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 104px;
    height: 58px;
    margin: 68px 128px 16px;
    object-fit: contain;
  }
  p{
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
  }
`