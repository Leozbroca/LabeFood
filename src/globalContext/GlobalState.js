import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from 'axios'
import BASE_URL from "../constants/url";

export const GlobalState = (props) => {
    const [restaurants,setRestaurants] = useState([])
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        const getRestaurants = () => { 
            axios.get(`${BASE_URL}/restaurants`, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setRestaurants(res.data.restaurants)
            })
            .catch((err) => {
                console.log('err', err.response.data.message)
                alert(err.response.data.message)
            })
        }
        getRestaurants()
    }, [])
    
    

    return(
     <GlobalStateContext.Provider value={{restaurants}}>
        {props.children}
    </GlobalStateContext.Provider>
    )
} 
