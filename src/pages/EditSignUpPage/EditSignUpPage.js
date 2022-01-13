import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import EditSignUpForm from "./EditSignUpForm";
import { MainContainer } from "./styles";

const EditSignUpPage = () => {
    useProtectedPage()
    return (
        <MainContainer>
            <h1>Editar Perfil</h1>
            <EditSignUpForm/>
        </MainContainer>
    )
}

export default EditSignUpPage;