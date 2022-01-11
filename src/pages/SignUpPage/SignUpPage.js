import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
    useUnprotectedPage()
    
    return (
        <div>
            <h1>SignUpPage</h1>
            <SignUpForm/>
        </div>
    )
}

export default SignUpPage;