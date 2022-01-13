import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import EditAdressForm from "./EditAddressForm";
import { MainContainer } from "./styles";


const EditAdressPage = () => {
    useProtectedPage()
    return (
        <MainContainer>
            <h1>EditAdressPage</h1>
            <EditAdressForm/>
        </MainContainer>
    )
}

export default EditAdressPage;