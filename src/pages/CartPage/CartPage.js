import React, { useContext, useEffect, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { Typography } from "@material-ui/core";
import LabelBottomNavigation from '../../components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header'
import BASE_URL from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Swal from 'sweetalert2';
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
import axios from "axios";

const CartPage = () => {
  useProtectedPage()
  const { cart, setCart, setColors, count, setCount, restaurantDetail, control, setControl, setLoading } = useContext(GlobalStateContext);
  const [valueToPay, setValueToPay] = useState(0)
  const [value, setValue] = useState('');
  const getAddress = useRequestData([], `${BASE_URL}/profile/address`)
  const getActiveOrder = useRequestData({}, `${BASE_URL}/active-order`)
  const address = getAddress.address
  const details = restaurantDetail
  const notify = () => toast.error("removido");

  //Alterar valor
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setColors.setColorHome('')
    setColors.setColorCart('#5cb646')
    setColors.setColorProfile('')
    onChangeValue()
  }, [cart])

  // Contante para servir como parâmetro de sumir o card de pedido em andamento
  const timeOrder = details && details.deliveryTime * 60 * 1000

  //Calculo de preço
  const onChangeValue = () => {
    let priceToPay = 0;
    cart.forEach((prod) => {
      priceToPay += Number(prod.price) * prod.amount;
    });
    const valueShipping = renderCart == false ? 0 : details.shipping
    setValueToPay(priceToPay + valueShipping)
  }

  //Remover do carrinho
  const removeFromCart = (itemToRemove) => {
    const index = cart.findIndex((i) => i.id === itemToRemove.id);
    const newCart = [...cart];

    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    notify()
    setCart(newCart);
    setCount(count - 1);
  };

  //Confirmação de pedido
  const confirmPayment = (id) => {
    const productPay = []
    cart && cart.forEach((prod) => {
      productPay.push({
        id: prod.id,
        quantity: prod.amount
      })
    })
    const body = {
      products: productPay,
      paymentMethod: value
    }
    if (getActiveOrder.order === null) {
      axios.post(`${BASE_URL}/restaurants/${id}/order`, body, {
        headers: {
          auth: localStorage.getItem('token')
        }
      })
        .then((res) => {
          setLoading(true)
          setControl(control + 1)
          setTimeout(() => {
            setLoading(false);
            setControl(control + 1)
          }, timeOrder);

          setControl(control + 1)
          let timerInterval
          Swal.fire({
            title: 'Processando pagamento',
            html: 'Pagamento processado em <b></b> segundos.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
            }
            setCart([])
          })
        })
        .catch((err) => {
        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Já tem um pedido em andamento',
      })
    }
  }

  const renderCart = cart && cart.map((product) => {
    return (
      <ContainerCard key={product.id}>

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

      <DivSubTotal>

        <h3>SUBTOTAL</h3>

        <Typography color={'secondary'}><b>R${valueToPay.toFixed(2)}</b></Typography>
      </DivSubTotal>

      <DivPayment>

        <p>Forma de pagamento</p>

        <hr />
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
            <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
          </RadioGroup>
        </FormControl>
      </DivPayment>

      <DivButtonStyled>

        {renderCart == false ?
          <StyledButton
            variant="contained"
            type="submit"
          ><b>Confirmar</b>
          </StyledButton>
          :
          <StyledButton
            color='secondary'
            variant="contained"
            type="submit"
            onClick={() => confirmPayment(details.id)}><b>Confirmar</b>
          </StyledButton>}

      </DivButtonStyled>

      <LabelBottomNavigation />
    </ContainerCart>
  )
}

export default CartPage;