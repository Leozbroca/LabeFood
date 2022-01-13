import styled from "styled-components";
import { Button, TextField } from '@material-ui/core';

// Estilização dos inputs e botão do material ui 

export const StyledButton = styled(Button)`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
`

export const StyledInput = styled(TextField)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`

// Estilização da página

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DivForm = styled.div`
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 450px;
    margin-top:20px;
  }
`