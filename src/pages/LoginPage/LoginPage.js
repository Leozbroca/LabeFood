import React, { useEffect} from "react";
import { useNavigate } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goToSignUp } from "../../router/coordinator";
import LoginForm from "./LoginForm";
import logo from "../../assets/logo-future-eats-2.png"
import { MainContainer } from "./styles";
import ScreenLoading from "../../components/ScreenLoading/ScreenLoading";
import { useState } from "react";
import axios from "axios";


 
 

const LoginPage = () => {
    
    useUnprotectedPage()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (

        <>

            {isLoading ?

                <ScreenLoading />
                :
                <MainContainer>
                    <img src={logo} alt={'logotipo'} />
                    <p><b>Entrar</b></p>
                    <LoginForm />
                    <div onClick={() => goToSignUp(navigate)}>
                        <p><b>Não possui cadastro? Clique aqui.</b></p>
                    </div>
                </MainContainer>}

        </>

    )
}

export default LoginPage;