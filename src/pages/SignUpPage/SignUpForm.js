import React, { useState, useContext } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router";
import { signup } from "../../services/user";
import { StyledButton, StyledInput, DivForm } from "./styles";
import GlobalStateContext from "../../globalContext/GlobalStateContext";

const SignUpForm = () => {
    const { control, setControl } = useContext(GlobalStateContext)
    const { form, onChangeInput, clear } = useForm({ name: '', email: '', cpf: '', password: '' })
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState('')

    //Enviar form
    const onSubmitForm = (event) => {
        event.preventDefault()
        if (confirm === form.password) {
            signup(form, clear, navigate, control, setControl)
        }
    }

    //Alterar campo
    const onChangeConfirm = (event) => {
        setConfirm(event.target.value)
    };

    return (
        <DivForm>
            <form onSubmit={onSubmitForm}>

                <StyledInput
                    name='name'
                    value={form.name}
                    onChange={onChangeInput}
                    label="Nome e Sobrenome"
                    variant="outlined"
                    required
                />

                <StyledInput
                    name='email'
                    value={form.email}
                    onChange={onChangeInput}
                    label="E-mail"
                    variant="outlined"
                    required
                />

                <StyledInput
                    name='cpf'
                    value={form.cpf}
                    onChange={onChangeInput}
                    label="CPF"
                    variant="outlined"
                    required
                    placeholder='000.000.000-00'
                />

                <StyledInput
                    name='password'
                    value={form.password}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    type="password"
                    required
                />

                <StyledInput
                    name='password-confirm'
                    value={confirm}
                    onChange={onChangeConfirm}
                    label="Confirme a senha anterior"
                    variant="outlined"
                    type="password"
                    required
                />

                <StyledButton color='secondary' variant="contained" type="submit"><b>Criar</b></StyledButton>
            </form>
        </DivForm>

    )
}

export default SignUpForm;