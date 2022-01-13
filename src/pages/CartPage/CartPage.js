import React, {useContext, useEffect} from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { ContainerCard, DivButton, DivImg, DivText, DivQuant, ContainerCart, RenderCart } from "./styles";
import { Typography } from "@material-ui/core";
import LabelBottomNavigation from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const CartPage = () => {
    useProtectedPage()
    const {cart, setCart, setColors} = useContext(GlobalStateContext)
    
     useEffect(() => {
        setColors.setColorHome('')
        setColors.setColorCart('#5cb646')
        setColors.setColorProfile('')
     }, [])

    const renderCart = cart && cart.map((product) => {
        return (
            <ContainerCard>
            <DivImg>
                <img src={product.photoUrl} alt={'foto do produto'} />
            </DivImg>
            <DivText>
                <Typography variant={'body1'} color='secondary'>{product.name}</Typography>
                <Typography variant={'subtitle2'} color='error'>{product.description}</Typography>
                <Typography variant={'body1'}>R$ {product.price}</Typography>
            </DivText>
            <DivQuant>
                <p>{product.amount}</p>
            </DivQuant>
            <DivButton>
                <button >Remover</button>
            </DivButton>
        </ContainerCard>
        )
    })

    return (
        <ContainerCart>
            <Header title={'Meu carrinho'} />
            <RenderCart>
                {renderCart}
            </RenderCart>
        <LabelBottomNavigation/>
        </ContainerCart>
      )
}

export default CartPage;