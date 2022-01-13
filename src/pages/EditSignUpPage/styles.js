import styled from "styled-components";
import { Button, TextField } from '@material-ui/core';

export const DivForm = styled.div`
  form{
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    margin-top:20px;
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
  border: 1px solid black;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`