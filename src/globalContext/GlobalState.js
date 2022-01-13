import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from 'axios'
import BASE_URL from "../constants/url";

export const GlobalState = (props) => {
    const [restaurants,setRestaurants] = useState([])
    const [cart, setCart] = useState([])
    const [colorHome, setColorHome] = useState('');
    const [colorCart, setColorCart] = useState('');
    const [colorProfile, setColorProfile] = useState('');
    const [count, setCount] = useState(0)
    
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
    
    const colors = {colorHome, colorCart, colorProfile}
    const setColors = {setColorHome, setColorCart, setColorProfile}

    return(
     <GlobalStateContext.Provider value={{restaurants, cart, setCart, colors, setColors, count, setCount}}>
        {props.children}
    </GlobalStateContext.Provider>
    )
} 
