import React, { useContext, useState, useLayoutEffect, useEffect } from "react";
import { useNavigate } from "react-router";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { MainContainer, DivCategories, DivCards, StyledInput, DivForm } from "./styles";
import { goToRestaurant } from "../../router/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Typography, InputAdornment } from '@material-ui/core';
import useForm from "../../hooks/useForm"
import SearchIcon from '@material-ui/icons/Search';
import Header from '../../components/Header/Header'
import LabelBottomNavigation from '../../components/Footer/Footer'
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import ActiveOrderCard from "./ActiveOrderCard";
import axios from "axios";
import BASE_URL from "../../constants/url";

const HomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const { restaurants, setRestaurants, setColors, order, loading } = useContext(GlobalStateContext)
    const { form, onChangeInput } = useForm({ restaurant: '' }) //Campo de busca
    const [text, setText] = useState('') //Busca pré definida
    const [control, setControl] = useState(0) //Controla busca por tipo de comida

    useLayoutEffect(() => {
        setColors.setColorHome('#5cb646')
        setColors.setColorCart('')
        setColors.setColorProfile('')
    }, [])

    useEffect(() => {
        getRestaurants()
        
    },[])

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

    // Troca de página
    const goToRestDetails = (id) => {
        goToRestaurant(navigate, id)
    }

    // Busca pré definida por tipo de comida
    const onChangeText = (value) => {
        setText(value)
        switch (value) {
            case 'Árabe':
                if (control === 1) {
                    setControl(0)
                } else {
                    setControl(1)
                }
                break
            case 'Asiática':
                if (control === 2) {
                    setControl(0)
                } else {
                    setControl(2)
                }
                break
            case 'Hamburguer':
                if (control === 3) {
                    setControl(0)
                } else {
                    setControl(3)
                }
                break
            case 'Italiana':
                if (control === 4) {
                    setControl(0)
                } else {
                    setControl(4)
                }
                break
            case 'Sorvetes':
                if (control === 5) {
                    setControl(0)
                } else {
                    setControl(5)
                }
                break
            case 'Carnes':
                if (control === 6) {
                    setControl(0)
                } else {
                    setControl(6)
                }
                break
            case 'Baiana':
                if (control === 7) {
                    setControl(0)
                } else {
                    setControl(7)
                }
                break
            case 'Petiscos':
                if (control === 8) {
                    setControl(0)
                } else {
                    setControl(8)
                }
                break
            case 'Mexicana':
                if (control === 9) {
                    setControl(0)
                } else {
                    setControl(9)
                }
                break
            default:
                setControl(0)
        }
    }

    const renderRestaurant = () => {
        //Caso campo de busca vazio
        if (control === 0) {
            const listRestaurants = restaurants.filter((item) => {
                return item.name.toLowerCase().includes(form.restaurant.toLowerCase())
            }).map((rest) => {
                return (
                    <CardRestaurant
                        key={rest.id}
                        restaurant={rest}
                        changePage={() => goToRestDetails(rest.id)}
                    />
                )
            })
            return listRestaurants
        }
        //Caso campo de busca preenchido
        else {
            const listRestaurants = restaurants.filter((item) => {
                return item.name.toLowerCase().includes(form.restaurant.toLowerCase())
            }).filter((restaurant) => {
                return text === restaurant.category
            }).map((rest) => {
                return (
                    <CardRestaurant
                        key={rest.id}
                        restaurant={rest}
                        changePage={() => goToRestDetails(rest.id)}
                    />
                )
            })
            return listRestaurants
        }
    }

    return (

        <MainContainer>
            <Header title={'Future Eats'} />
            <DivForm>
                <StyledInput
                    name='restaurant'
                    value={form.restaurant}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label="Restaurante"
                    variant="outlined"
                    required
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    }}
                />
            </DivForm>

            {form.restaurant === '' ? <DivCategories>
                <Typography color={control === 1 ? 'secondary' : 'primary'} onClick={() => onChangeText('Árabe')}><b>Árabe</b></Typography>
                <Typography color={control === 2 ? 'secondary' : 'primary'} onClick={() => onChangeText('Asiática')}><b>Asiática</b></Typography>
                <Typography color={control === 3 ? 'secondary' : 'primary'} onClick={() => onChangeText('Hamburguer')}><b>Hamburguer</b></Typography>
                <Typography color={control === 4 ? 'secondary' : 'primary'} onClick={() => onChangeText('Italiana')}><b>Italiana</b></Typography>
                <Typography color={control === 5 ? 'secondary' : 'primary'} onClick={() => onChangeText('Sorvetes')}><b>Sorvetes</b></Typography>
                <Typography color={control === 6 ? 'secondary' : 'primary'} onClick={() => onChangeText('Carnes')}><b>Carnes</b></Typography>
                <Typography color={control === 7 ? 'secondary' : 'primary'} onClick={() => onChangeText('Baiana')}><b>Baiana</b></Typography>
                <Typography color={control === 8 ? 'secondary' : 'primary'} onClick={() => onChangeText('Petiscos')}><b>Petiscos</b></Typography>
                <Typography color={control === 9 ? 'secondary' : 'primary'} onClick={() => onChangeText('Mexicana')}><b>Mexicana</b></Typography>
            </DivCategories> : <div></div>}

            <DivCards>
                {renderRestaurant()}
                {loading === false || order == null? <></> : <ActiveOrderCard
                    restaurantName={order.restaurantName}
                    totalPrice={order.totalPrice} />}
            </DivCards>

            <LabelBottomNavigation />

        </MainContainer>
    )
}

export default HomePage;