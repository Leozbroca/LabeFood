import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router";
import { signup } from "../../services/user";
import { StyledButton, StyledInput, DivForm } from "./styles";

const SignUpForm = () => {
    const { form, onChangeInput, clear } = useForm({ name: '', email: '', cpf: '', password: '' })
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState('')

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (confirm === form.password) {
            signup(form, clear, navigate)
        }
    }

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
                />

                <StyledInput
                    name='email'
                    value={form.email}
                    onChange={onChangeInput}
                    label="E-mail"
                    variant="outlined"
                />

                <StyledInput
                    name='cpf'
                    value={form.cpf}
                    onChange={onChangeInput}
                    label="CPF"
                    variant="outlined"
                />

                <StyledInput
                    name='password'
                    value={form.password}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                />

                <StyledInput
                    name='password-confirm'
                    value={confirm}
                    onChange={onChangeConfirm}
                    label="Confirme a senha anterior"
                    variant="outlined"
                />

                <StyledButton color='secondary' variant="contained" type="submit"><b>Criar</b></StyledButton>
            </form>
        </DivForm>

    )
}

export default SignUpForm;