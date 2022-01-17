import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import EditSignUpForm from "./EditSignUpForm";
import { MainContainer } from "./styles";
import Header from '../../components/Header/Header'
import { goToProfile } from "../../router/coordinator";

const EditSignUpPage = () => {
    useProtectedPage()
    
    return (
        <MainContainer>
            <Header title={'Editar'} goTo={goToProfile} />
            <EditSignUpForm />
        </MainContainer>
    )
}

export default EditSignUpPage;