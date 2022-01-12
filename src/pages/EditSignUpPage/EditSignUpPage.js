import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const EditSignUpPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>EditSignUpPage</h1>
        </div>
    )
}

export default EditSignUpPage;