import React, { useState } from "react";
import axios from 'axios'
import useForm from "../../hooks/useForm";
import { StyledButton, StyledInput } from './styles'
import { goToAdress} from "../../router/coordinator";
import BASE_URL from "../../constants/url";
import { useNavigate } from "react-router";

const SignUpPage = () => {
    const { form, onChangeInput, clear } = useForm({ name: '', email: '', cpf: '', password: '' })
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState('')

    const SignUp = (event) => {
        event.preventDefault()
        axios
            .post(`${BASE_URL}/signup`, form)
            .then((res) => {
                if(confirm === form.password){
                    localStorage.setItem('token', res.data.token)
                    goToAdress(navigate)
                    clear()
                    alert(res)
                    console.log('cadastro', res)
                    

                }
            })
            .catch((err)=>{
                console.log('err', err.response.data.message)
                alert(err.response.data.message)

            })
    }
    const onChangeConfirm = (event) => {
      setConfirm (event.target.value)
    };
 
    return (
        <div>
            <h1>SignUpPage</h1>

            <form onSubmit={SignUp}>
                <StyledInput
                    name='name'
                    value={form.name}
                    onChange={onChangeInput}
                    label="Nome e Sobrenome"
                    variant="outlined" />

                <StyledInput
                    name='email'
                    value={form.email}
                    onChange={onChangeInput}
                    label="E-mail"
                    variant="outlined" />

                <StyledInput
                    name='cpf'
                    value={form.cpf}
                    onChange={onChangeInput}
                    label="CPF"
                    variant="outlined" />

                <StyledInput
                    name='password'
                    value={form.password}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined" />

                <StyledInput
                    name='password-confirm'
                    value={confirm}
                    onChange={onChangeConfirm}
                    label="Confirme a senha anterior"
                    variant="outlined" />

                <StyledButton color='secondary' variant="contained" type="submit">Criar</StyledButton>
            </form>
        </div>
    )
}

export default SignUpPage;