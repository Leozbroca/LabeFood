import BASE_URL from "../constants/url";
import axios from "axios";

export const getRestaurantDetails = (id, token) => {
    axios
    .get(`${BASE_URL}/restaurants/${id}`, {
        header: {
            auth: token
        }
    })
    .then ( res => {
        console.log(res.data)
    })
    .catch ( error => {
        console.log(error.response.data.message)
    })
}