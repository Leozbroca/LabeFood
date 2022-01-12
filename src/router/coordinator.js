export const goToHome = (navigate) => {
    navigate('/')
}

export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goToEditSignUp = (navigate) => {
    navigate('/editsignup')
}

export const goToAdress = (navigate) => {
    navigate('/adress')
}

export const goToEditAdress = (navigate) => {
    navigate('/editadress')
}

export const goToRestaurant = (navigate, restId) => {
    navigate(`/restaurant/${restId}`)
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}

export const goToCart = (navigate) => {
    navigate('/cart')
}