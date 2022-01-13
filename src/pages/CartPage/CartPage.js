import React, { useContext, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { Button, Typography } from "@material-ui/core";
import LabelBottomNavigation from '../../components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header'
import BASE_URL from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";

import {
  ContainerCard,
  DivButton,
  DivImg,
  DivText,
  DivQuant,
  ContainerCart,
  RenderCart,
  DivTextAdress,
  DivSubTotal,
  DivPayment,
  StyledButton,
  DivButtonStyled,
  DivImagem,
  DivNome,
  DivTest,
  EsperaEFrete
} from "./styles";

const CartPage = () => {
  useProtectedPage()
  const { cart, setCart, setColors, count, setCount, restaurantDetail, setRestaurantDetail } = useContext(GlobalStateContext)
  const notify = () => toast.error("removido");
  const getAddress = useRequestData([], `${BASE_URL}/profile/address`)
  const address = getAddress.address
  const details = restaurantDetail

  useEffect(() => {
    setColors.setColorHome('')
    setColors.setColorCart('#5cb646')
    setColors.setColorProfile('')
  }, [])

  // console.log(getAddress, address)
  console.log('b', restaurantDetail)
  console.log('c', details)

  const removeFromCart = (itemToRemove) => {
    const index = cart.findIndex((i) => i.id === itemToRemove.id);
    const newCart = [...cart];

    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    setCart(newCart);
    setCount(count - 1);
    notify()
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
          <button onClick={() => removeFromCart(product)}>Remover</button>
        </DivButton>
      </ContainerCard>
    )
  })

  return (
    <ContainerCart>
      <ToastContainer position='top-center' autoClose={2000} />
      <Header title={'Meu carrinho'} />
      <DivTextAdress>
        <div>
          <p>Endereço de entrega</p>
          <p><b>{address && address.street}, {address && address.number}</b></p>
        </div>
      </DivTextAdress>
      {renderCart == false ? ''
        : <DivTest>
          <DivImagem src={details && details.logoUrl} />
          <DivNome><b>{details && details.name}</b></DivNome>
          <EsperaEFrete>
            <div>{details && details.category}</div>
          </EsperaEFrete>
          <EsperaEFrete>
            <div>{details && details.deliveryTime - 10} - {details && details.deliveryTime} min</div>
            <div>Frete R${details && details.shipping},00</div>
          </EsperaEFrete>
          <EsperaEFrete>
            <div>{details && details.address}</div>
          </EsperaEFrete>
        </DivTest>}

      <RenderCart>
        {renderCart == false ? <p><b>Carrinho vazio</b></p> : renderCart}
      </RenderCart>

      

      <LabelBottomNavigation />
      <DivSubTotal>
        <h3>SUBTOTAL</h3>
        <Typography color={'secondary'}><b>R$0,00</b></Typography>
      </DivSubTotal>
      <DivPayment>
        <p>Forma de pagamento</p>
        <hr />
        <div>
          <input type="checkbox" />
          <label>Dinheiro</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Cartão de crédito</label>
        </div>
      </DivPayment>
      <DivButtonStyled>
        <StyledButton color={renderCart == false ? 'tertiary' : 'secondary'} variant="contained" type="submit"><b>Confirmar</b></StyledButton>
      </DivButtonStyled>
    </ContainerCart>
  )
}

export default CartPage;