import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AdressForm from "./AdressForm";

const AdressPage = () => {
    useProtectedPage()
    return (
        
        <div>
            <h1>Meu endereço</h1>
            <AdressForm/>
        </div>
    )
}

export default AdressPage;