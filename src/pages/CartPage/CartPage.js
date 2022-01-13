import React, {useContext} from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { ContainerCard, DivButton, DivImg, DivText, DivQuant, ContainerCart } from "./styles";
import { Typography } from "@material-ui/core";

const CartPage = () => {
    useProtectedPage()
    const {cart, setCart} = useContext(GlobalStateContext)

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
            <h4>Meu carrinho</h4>
            {renderCart}
        </ContainerCart>
    )
}

export default CartPage;