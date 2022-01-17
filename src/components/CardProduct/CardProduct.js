import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { ContainerCard, DivButton, DivImg, DivText } from "./styles";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardProduct = (props) => {

    const notify = () => toast.success("Adicionado");
    const { cart, setCart } = useContext(GlobalStateContext)

    //Adicionar no carrinho e verificar se já existe
    
    const addToCart = (prod) => {
        const index = cart.findIndex((i) => i.id === prod.id)
        const newCart = [...cart]
        if (index === -1) {
            const cartItem = { ...prod, amount: 1 }
            newCart.push(cartItem)
        } else {
            newCart[index].amount += 1
        }
        notify()
        setCart(newCart)  
    }

    return (
        <ContainerCard>

            <DivImg>
                <img src={props.product.photoUrl} alt={'foto do produto'} />
            </DivImg>
            
            <DivText>
                <Typography variant={'body1'} color='secondary'>{props.product.name}</Typography>
                <Typography variant={'subtitle2'} color='error'>{props.product.description}</Typography>
                <Typography variant={'body1'}>R$ {props.product.price}</Typography>
            </DivText>

            <DivButton>
                <button onClick={() => addToCart(props.product)}>Adicionar</button>
            </DivButton>
        </ContainerCard>

    )
}

export default CardProduct;