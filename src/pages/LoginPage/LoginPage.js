import React from "react";
import { useNavigate } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goToSignUp } from "../../router/coordinator";
import LoginForm from "./LoginForm";
import logo from "../../assets/logo-future-eats-2.png"
import { MainContainer } from "./styles";

const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    
    return (
        <MainContainer>
            <img src={logo}/>
            <p><b>Entrar</b></p>
            <LoginForm />
            <div onClick={() => goToSignUp(navigate)}>
                <p><b>Não possui cadastro? Clique aqui.</b></p>
            </div>
        </MainContainer>
    )
}

export default LoginPage;