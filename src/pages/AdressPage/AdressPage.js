import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AdressForm from "./AdressForm";
import { MainContainer } from "./styles";

const AdressPage = () => {
    useProtectedPage()
    return (
        <MainContainer>
            <h3><b>Meu endereço</b></h3>
            <AdressForm />
        </MainContainer>
    )
}

export default AdressPage;