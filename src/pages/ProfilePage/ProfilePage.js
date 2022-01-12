import React from "react";
import { getProfile } from "../../services/user";

const ProfilePage = () => {

    const token = localStorage.getItem('token')

    // const userProfile = () => {
    //     const profile = getProfile(token)  
    // }


    return (
        <div>
            <h1>ProfilePage</h1>
            
        </div>
    )
}

export default ProfilePage;