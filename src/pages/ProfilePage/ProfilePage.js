import React from "react";
import { getProfile } from "../../services/user";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import LabelBottomNavigation from '../../components/Footer/Footer'

const ProfilePage = () => {
    const {setColors} = useContext(GlobalStateContext)
    const token = localStorage.getItem('token')

    // const userProfile = () => {
    //     const profile = getProfile(token)  
    // }

    useEffect(() => {
        setColors.setColorHome('')
        setColors.setColorCart('')
        setColors.setColorProfile('#5cb646')
    }, [])

    return (
        <div>
            <h1>ProfilePage</h1>
            <LabelBottomNavigation/>
        </div>
    )
}

export default ProfilePage;