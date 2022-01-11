import React from "react";
import SignUpForm from "./SignUpForm";
import logo from "../../assets/logo-future-eats-2.png"
import { MainContainer } from "./styles";

const SignUpPage = () => {
    
    return (
        <MainContainer>
            <img src={logo}/>
            <p><b>Cadastrar</b></p>
            <SignUpForm/>
        </MainContainer>
    )
}

export default SignUpPage;