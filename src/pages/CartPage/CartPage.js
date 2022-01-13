import React, {useContext, useEffect} from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { ContainerCard, DivButton, DivImg, DivText, DivQuant, ContainerCart, RenderCart } from "./styles";
import { Typography } from "@material-ui/core";
import LabelBottomNavigation from '../../components/Footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header/Header'


const CartPage = () => {
    useProtectedPage()
    const {cart, setCart, setColors, count, setCount} = useContext(GlobalStateContext)
    const notify = () => toast.success("removido");
    
     useEffect(() => {
        setColors.setColorHome('')
        setColors.setColorCart('#5cb646')
        setColors.setColorProfile('')
     }, [])

     const removeFromCart = (itemToRemove) => {
        const index = cart.findIndex((i) => i.id === itemToRemove.id);
        const newCart = [...cart];
    
        if (newCart[index].amount === 1) {
          // Se só tem um, quero remover
          newCart.splice(index, 1);
        } else {
          // Se tem mais de um, quero diminuir
          newCart[index].amount -= 1;
        }
        setCart(newCart);
        setCount(count -1);
      };
    


      let priceToPay = 0;
      cart.forEach((prod) => {
        priceToPay += Number(prod.price) * prod.amount;
      });

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
                <button onClick={()=> removeFromCart(product)}>Remover</button>
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