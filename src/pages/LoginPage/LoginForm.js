import React from "react"
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router"
import { login } from "../../services/user"
import { StyledButton, StyledInput } from "./styles"

const LoginForm = () => {
    const { form, onChangeInput, clear } = useForm({ email: '', password: '' })
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    }


    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <StyledInput
                    name='email'
                    value={form.email}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    required />

                <StyledInput
                    name='password'
                    value={form.password}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    required />

                <StyledButton color='secondary' variant="contained" type="submit">Login</StyledButton>
            </form>
        </div>
    )
}

export default LoginForm;