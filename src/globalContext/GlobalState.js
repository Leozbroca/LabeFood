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

    useEffect(() => {
        getRestaurants()
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
                    console.log(err.response.data.message)
                })

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
                // console.log('err', err.response.data.message)
                // alert(err.response.data.message)
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
                // console.log(err.response.data.message)
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
                // console.log(err.response.data.message)
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
                    // console.log('err', err.response.data.message)
                    // alert(err.response.data.message)
                })
        } 
    const colors = { colorHome, colorCart, colorProfile }
    const setColors = { setColorHome, setColorCart, setColorProfile }

    return (
        <GlobalStateContext.Provider value={{ restaurants, order, history, cart, setCart, colors, setColors, count, setCount, restaurantDetail, setRestaurantDetail, control, setControl }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
} 
