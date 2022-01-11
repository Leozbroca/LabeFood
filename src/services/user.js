import BASE_URL from "../constants/url"
import { goToAdress, goToHome } from "../router/coordinator"
import axios from "axios"

export const login = (body, clear, navigate) => {
    axios
        .post(`${BASE_URL}/login`, body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            clear()
            goToHome(navigate)
        })
        .catch((err)=>{
            console.log('loginer', err)
        })
}

export const signup = (body, clear, navigate) => {
    axios
            .post(`${BASE_URL}/signup`, body)
            .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    clear()
                    goToAdress(navigate)
                    alert(res)
                    console.log('cadastro', res)
            })
            .catch((err)=>{
                console.log('err', err.response.data.message)
                alert(err.response.data.message)

            })
}