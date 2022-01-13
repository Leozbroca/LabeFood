import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { MainContainer, DivCategories, DivCentralizando, DivImagem, DivNome, DivTest, EsperaEFrete, StyledInput } from "./styles";
import { goToRestaurant } from "../../router/coordinator";
// import useProtectedPage from "../../hooks/useProtectedPage";
import { TextField, Typography, InputAdornment } from '@material-ui/core';
import useForm from "../../hooks/useForm"
import SearchIcon from '@material-ui/icons/Search';
import Header from '../../components/Header/Header'
import LabelBottomNavigation from '../../components/Footer/Footer'


const HomePage = () => {
//     useProtectedPage()
    const navigate = useNavigate()
    const { restaurants, setColors } = useContext(GlobalStateContext)
    const { form, onChangeInput, clear } = useForm({ restaurante: '' })
    const [ text, setText ] = useState('')
    const [ control, setControl ] = useState(0)

    useEffect(() => {
        setColors.setColorHome('#5cb646')
        setColors.setColorCart('')
        setColors.setColorProfile('')
    }, [])


    const goToRestDetails = (id) => {
        goToRestaurant(navigate, id)
    }

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
        if (control === 0) {
            const listaRestaurantes = restaurants.filter((item) => {
                return item.name.toLowerCase().includes(form.restaurante.toLowerCase())
            }).map((restaurante) => {
                return (
                    <DivTest key={restaurante.id} onClick={() => { goToRestDetails(restaurante.id) }}>
                        <DivImagem src={restaurante.logoUrl} />
                        <DivNome ><b>{restaurante.name}</b></DivNome>
                        <EsperaEFrete>
                            <div>{restaurante.deliveryTime - 10} - {restaurante.deliveryTime} min</div>
                            <div>Frete R${restaurante.shipping},00</div>
                            {/* <button onClick={() => { goToRestDetails(restaurante.id) }}>TESTE</button> */}
                        </EsperaEFrete>
                    </DivTest>
                )
            })
            return listaRestaurantes
        } else {
            const listaRestaurantes = restaurants.filter((item) => {
                return item.name.toLowerCase().includes(form.restaurante.toLowerCase())
            }).filter((restaurant) => {
                return text == restaurant.category
            }).map((restaurante) => {
                return (
                    <DivTest key={restaurante.id} onClick={() => { goToRestDetails(restaurante.id) }}>
                        <DivImagem src={restaurante.logoUrl} />
                        <DivNome ><b>{restaurante.name}</b></DivNome>
                        <EsperaEFrete>
                            <div>{restaurante.deliveryTime - 10} - {restaurante.deliveryTime} min</div>
                            <div>Frete R${restaurante.shipping},00</div>
                            {/* <button onClick={() => { goToRestDetails(restaurante.id) }}>TESTE</button> */}
                        </EsperaEFrete>
                    </DivTest>
                )
            })
            return listaRestaurantes
        }
    }


    return (
        <MainContainer>
            <Header/>
            <form>
            <StyledInput
                name='restaurante'
                value={form.restaurante}
                onChange={onChangeInput}
                id="outlined-basic"
                label="Restaurante"
                variant="outlined"
                required 
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                  }}
                />
            </form> 
            {form.restaurante === '' ? <DivCategories>
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

            <DivCentralizando>
                {renderRestaurant()}
            </DivCentralizando>
            <LabelBottomNavigation/>
        </MainContainer>
    )
}

export default HomePage;