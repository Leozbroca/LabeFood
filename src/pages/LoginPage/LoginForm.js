import React from "react"
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router"
import { login } from "../../services/user"
import { DivForm, StyledButton, StyledInput } from "./styles"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginForm = () => {
    useUnprotectedPage()
    const { form, onChangeInput, clear } = useForm({ email: '', password: '' })
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    }

    return (
        <DivForm>
            <form onSubmit={onSubmitForm}>
                <StyledInput
                    name='email'
                    value={form.email}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    type='email'
                    required />


                <StyledInput
                    name='password'
                    value={form.password}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    type='password'
                    required />

                <StyledButton color='secondary' variant="contained" type="submit"><b>Entrar</b></StyledButton>
            </form>
        </DivForm>
    )
}

export default LoginForm;