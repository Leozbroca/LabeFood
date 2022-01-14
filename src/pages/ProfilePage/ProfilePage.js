import React from "react";
import { getProfile } from "../../services/user";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import LabelBottomNavigation from '../../components/Footer/Footer'
import useRequestData from "../../hooks/useRequestData";
import BASE_URL from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { ContainerAddress, ContainerProfile, DivIcon, DivIconAdd, DivText, DivTextAdd, ScreenContainer } from "./styles";
import { useNavigate } from "react-router";
import { goToEditAddress, goToEditSignUp } from "../../router/coordinator";
import Header from '../../components/Header/Header'

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

    // const getActiveOrder = useRequestData({}, `${BASE_URL}/active-order`)

    // console.log(getActiveOrder)

    return (
        <ScreenContainer>
            <Header title={'Meu perfil'}/>
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
                    <Edit onClick={() => goToEditAddress(navigate)}/>
                </DivIconAdd>
            </ContainerAddress>

            
            <Typography variant='h6' color="primary">
                Histórico de Pedidos
            </Typography>

            <LabelBottomNavigation />
        </ScreenContainer>
    )
}


export default ProfilePage;