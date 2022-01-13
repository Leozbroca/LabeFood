import { Typography } from "@material-ui/core";
import React, { useContext} from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { ContainerCard, DivButton, DivImg, DivText, DivQuant} from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CardProduct = (props) => {

    const { cart, setCart } = useContext(GlobalStateContext)
    const notify = () => toast.success("Adicionado");


    

    const addToCart = (prod) => {
        const index = cart.findIndex((i) => i.id === prod.id)
        const newCart = [...cart]
        if (index === -1) {
            const cartItem = { ...prod, amount: 1 }
            newCart.push(cartItem)
        } else {
            newCart[index].amount += 1
        } 
        setCart(newCart)
        notify()
        
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
                {/* {returnShowSelect()} */}
            </DivText>
            <ToastContainer position='top-right' autoClose={2000} />
            <DivButton>
                {/* <button onClick={showSelect}>Adicionar</button> */}
                <button onClick={() => addToCart(props.product) }>Adicionar</button>
            </DivButton>
        </ContainerCard>

    )
}

export default CardProduct;