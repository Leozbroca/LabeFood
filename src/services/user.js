import BASE_URL from "../constants/url"
import { goToAdress, goToHome, goToProfile } from "../router/coordinator"
import axios from "axios"

export const login = (body, clear, navigate) => {
    axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToHome(navigate)
        })
        .catch((err) => {
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
        .catch((err) => {
            console.log('err', err.response.data.message)
            alert(err.response.data.message)

        })
}

export const addAdress = (body, clear, token, navigate) => {
axios
    .put(`${BASE_URL}/address`, body, {
        headers: {
            auth: token
      }
    })
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        console.log('cadastro', res)
        goToHome(navigate)
    })
    .catch((err) => {
        console.log('errAdress', err.response.data.message)
    })

}

export const editAddress = (body, clear, token, navigate) => {
    axios
        .put(`${BASE_URL}/address`, body, {
            headers: {
                auth: token
          }
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            console.log('cadastro', res)
            goToProfile(navigate)
        })
        .catch((err) => {
            console.log('errAdress', err.response.data.message)
        })
    
}

export const updateProfile = (body, clear, token, navigate) => {
    axios
        .put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: token
          }
        })
        .then((res) => {
            clear()
            console.log('cadastro', res)
            goToProfile(navigate)
        })
        .catch((err) => {
            console.log('errAdress', err.response.data.message)
        })
    
}


