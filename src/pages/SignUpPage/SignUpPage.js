import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import logo from "../../assets/logo-future-eats-2.png"
import { MainContainer } from "./styles";
import Header from '../../components/Header/Header'
import { goToLogin } from '../../router/coordinator'

const SignUpPage = () => {
    useUnprotectedPage()

    return (
        <MainContainer>
            <Header title={''} goTo={goToLogin} />
            <img src={logo} alt={'logotipo'} />
            <p><b>Cadastrar</b></p>
            <SignUpForm />
        </MainContainer>
    )
}

export default SignUpPage;