import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router";
import { StyledButton, StyledInput, DivForm } from "./styles";
import { updateProfile } from "../../services/user";

const EditSignUpForm = () => {
    const { form, onChangeInput, clear } = useForm({ name: '', email: '', cpf: '' })
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    //Enviar form
    const onSubmitForm = (event) => {
        event.preventDefault()
        updateProfile(form, clear, token, navigate)
    }

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
                    placeholder='000.000.000-00'
                />

                <StyledButton color='secondary' variant="contained" type="submit"><b>Salvar</b></StyledButton>
            </form>
        </DivForm>

    )
}

export default EditSignUpForm;