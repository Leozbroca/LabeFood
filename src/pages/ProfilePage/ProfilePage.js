import React from "react";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import LabelBottomNavigation from '../../components/Footer/Footer'
import useRequestData from "../../hooks/useRequestData";
import BASE_URL from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { useNavigate } from "react-router";
import { goToEditAddress, goToEditSignUp } from "../../router/coordinator";
import Header from '../../components/Header/Header'
import {
    ContainerAddress,
    ContainerProfile,
    DivIcon,
    DivIconAdd,
    DivText,
    DivTextAdd,
    ScreenContainer,
    DivCardHist,
    DivContainer
} from "./styles";

const ProfilePage = () => {
    useProtectedPage()
    const { setColors, history } = useContext(GlobalStateContext)
    const getProfile = useRequestData([], `${BASE_URL}/profile`)
    const getAddress = useRequestData([], `${BASE_URL}/profile/address`)
    const profile = getProfile.user
    const address = getAddress.address

    const navigate = useNavigate()

    useEffect(() => {
        setColors.setColorHome('')
        setColors.setColorCart('')
        setColors.setColorProfile('#5cb646')
    }, [])

    const convertMonth = (month) => {
        switch (month) {
            case 1:
                return "Janeiro"
            case 2:
                return "Fevereiro"
            case 3:
                return "Março"
            case 4:
                return "Abril"
            case 5:
                return "Maio"
            case 6:
                return "Junho"
            case 7:
                return "Julho"
            case 8:
                return "Agosto"
            case 9:
                return "Setembro"
            case 10:
                return "Outubro"
            case 11:
                return "Novembro"
            case 12:
                return "Dezembro"
            default:
                return "Error"
        }
    }

    //Base para data
    const convertDate = (dateOfOrder) => {
        const date = new Date(dateOfOrder)
        return `${date.getDate()} de ${convertMonth(date.getMonth() + 1)} de ${date.getFullYear()}`
    }

    //Renderizar histórico de pedido
    const histOrder = history.orders && history.orders.map((order) => {
        const date = convertDate(order.createdAt)
        return (
            <DivCardHist key={order.createdAt}>
                <div>
                    <h4>{order.restaurantName}</h4>
                    <p>{date}</p>
                    <h3>SUBTOTAL R${order.totalPrice.toFixed(2)}</h3>
                </div>
            </DivCardHist>
        )
    })
    return (
        <ScreenContainer>

            <DivContainer>

                <Header title={'Meu perfil'} />

                <ContainerProfile>

                    <DivText>

                        <Typography variant={'body1'} color={'primary'}>
                            {profile && profile.name}
                        </Typography>

                        <Typography variant={'body1'} color={'primary'}>
                            {profile && profile.email}
                        </Typography>

                        <Typography variant={'body1'} color={'primary'}>
                            {profile && profile.cpf}
                        </Typography>
                    </DivText>

                    <DivIcon>
                        <Edit onClick={() => goToEditSignUp(navigate)} />
                    </DivIcon>
                </ContainerProfile>

                <ContainerAddress>

                    <DivTextAdd>

                        <Typography variant='body1' color="error">
                            Endereço Cadastrado
                        </Typography>

                        <Typography variant='body1' color="primary">
                            {`${address && address.street}, 
                            ${address && address.number} - 
                            ${address && address.neighbourhood}`}
                        </Typography>
                    </DivTextAdd>

                    <DivIconAdd>

                        <Edit onClick={() => goToEditAddress(navigate)} />
                    </DivIconAdd>
                </ContainerAddress>


                <Typography variant='h6' color="primary">
                    Histórico de Pedidos
                </Typography>

                {histOrder}

            </DivContainer>
            
            <LabelBottomNavigation />
        </ScreenContainer>
    )
}


export default ProfilePage;