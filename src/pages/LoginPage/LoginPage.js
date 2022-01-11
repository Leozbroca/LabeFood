import React from "react";
import axios from 'axios'
import useForm from "../../hooks/useForm";
import { StyledButton, StyledInput } from './styles'
import BASE_URL from "../../constants/url";
import { useNavigate } from "react-router";
import { goToHome, goToSignUp } from "../../router/coordinator";

const LoginPage = () => {
    const { form, onChangeInput, clear } = useForm({ email: '', password: '' })
    const navigate = useNavigate()
  
    const login = (event) => {
        event.preventDefault()
        axios
            .post(`${BASE_URL}/login`, form)
            .then((res)=>{
                localStorage.setItem('token', res.data.token)
                clear()
                goToHome(navigate)
            })
            .catch((err)=>{
                console.log('loginer', err)
            })
    }
    // onClick={goToSignUp(navigate)}
    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={login}>
                <StyledInput
                    name='email'
                    value={form.email}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined" />

                <StyledInput
                    name='password'
                    value={form.password}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined" />

                <StyledButton color='secondary' variant="contained" type="submit">Login</StyledButton>
                <div onClick={()=> goToSignUp(navigate)}>
                    Não possui cadastro? Clique aqui. 
                </div>
            </form>
        </div>
    )
}

export default LoginPage;