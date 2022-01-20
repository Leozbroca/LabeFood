import BASE_URL from "../constants/url"
import { goToAdress, goToHome, goToProfile } from "../router/coordinator"
import axios from "axios"
import Swal from 'sweetalert2';

export const login = (body, clear, navigate, value, setValue) => {
    // const [value, setValue] = useState
    axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToHome(navigate)
            setValue(value +1)
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário ou senha incorretos',
              })
        })
}

export const signup = (body, clear, navigate, value, setValue) => {
    axios
        .post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToAdress(navigate)
            setValue(value +1)
        })
        .catch((err) => {
            // alert(err.response.data.message)
        })
}

export const addAdress = (body, clear, token, navigate, value, setValue) => {
    axios
        .put(`${BASE_URL}/address`, body, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToHome(navigate)
            setValue(value +1)
        })
        .catch((err) => {
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
            goToProfile(navigate)
        })
        .catch((err) => {
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


