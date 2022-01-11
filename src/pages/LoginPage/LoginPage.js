import React from "react";
import { useNavigate } from "react-router";
import { goToSignUp } from "../../router/coordinator";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    const navigate = useNavigate()


    return (
        <div>
            <h1>LoginPage</h1>
            <LoginForm />
            <div onClick={() => goToSignUp(navigate)}>
                Não possui cadastro? Clique aqui.
            </div>
        </div>
    )
}

export default LoginPage;