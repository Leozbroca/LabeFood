import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";


const EditAdressPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>EditAdressPage</h1>
        </div>
    )
}

export default EditAdressPage;