import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import EditAdressForm from "./EditAddressForm";


const EditAdressPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>EditAdressPage</h1>
            <EditAdressForm/>
        </div>
    )
}

export default EditAdressPage;