import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import EditAdressForm from "./EditAddressForm";
import { MainContainer } from "./styles";
import Header from '../../components/Header/Header'
import { goToProfile } from "../../router/coordinator";

const EditAdressPage = () => {
    useProtectedPage()
    return (
        <MainContainer>
            <Header title={'Endereço'} goTo={goToProfile} />
            <EditAdressForm />
        </MainContainer>
    )
}

export default EditAdressPage;