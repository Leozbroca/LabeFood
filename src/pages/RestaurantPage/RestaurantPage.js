import React from "react";
import { useParams } from "react-router";
import { getRestaurantDetails } from "../../services/restaurant";
const RestaurantPage = () => {
    const restId = useParams()
    const token = localStorage.getItem('token')

    const restDetails = () => {
        getRestaurantDetails(restId, token)
    }

    return (

        <div>
            <h1>RestaurantPage</h1>
            {restDetails()}
        </div>
    )
}

export default RestaurantPage;