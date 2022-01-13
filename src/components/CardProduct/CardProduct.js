import { Typography } from "@material-ui/core";
import React, { useContext} from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { ContainerCard, DivButton, DivImg, DivText, DivQuant} from "./styles";
import { useState } from "react";
import Select from './Select'

const CardProduct = (props) => {

    const { cart, setCart, count, setCount } = useContext(GlobalStateContext)
   
    // const [select , setSelect] = useState(false)

    // const showSelect = () =>{
    //     setSelect(!select) 
    // }
    
    // const returnShowSelect = () =>{
    //     const returnSelect = <div>
    //     <Select/>
    // </div>
    // return select ? returnSelect : ''
    // }


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
            <DivButton>
                {/* <button onClick={showSelect}>Adicionar</button> */}
                <button onClick={() => addToCart(props.product) }>Adicionar</button>
            </DivButton>
           
        </ContainerCard>

    )
}

export default CardProduct;