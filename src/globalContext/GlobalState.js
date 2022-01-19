import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from 'axios'
import BASE_URL from "../constants/url";

export const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [cart, setCart] = useState([])
    const [colorHome, setColorHome] = useState('');
    const [colorCart, setColorCart] = useState('');
    const [colorProfile, setColorProfile] = useState('');
    const [count, setCount] = useState(0)
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [order, setOrderValue] = useState({}) //Pedido em andamento
    const [history, setHistoryValue] = useState([]) //Histórico de pedidos.
    const [control, setControl] = useState(0) //Controle para renderizar card do pedido em andamento
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem("token")

    // Localizar resturantes
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
            })
    }

    // Localizar pedido em andamento
    const getActiveOrder = () => {

        axios
            .get(`${BASE_URL}/active-order`, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setOrderValue(res.data.order)
            })
            .catch((err) => {
            })

    }

    // Localizar histórico de pedidos
    const ordersHistory = () => {
        axios
            .get(`${BASE_URL}/orders/history`, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setHistoryValue(res.data)
            })
            .catch((err) => {
            })
    }

    useEffect(() => {
        getRestaurants();
        getActiveOrder();
        ordersHistory();
        ordersHistory();
        getActiveOrder();
        getRestaurants();
    }, [control])

    const colors = { colorHome, colorCart, colorProfile }
    const setColors = { setColorHome, setColorCart, setColorProfile }

    return (
        <GlobalStateContext.Provider
            value={{
                restaurants, order, history, cart, setCart, colors,
                setColors, count, setCount, restaurantDetail, setRestaurantDetail,
                control, setControl, loading, setLoading
            }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
} 
