import { Typography } from "@material-ui/core";
import React from "react";
import { ContainerCard, DivButton, DivImg, DivText } from "./styles";

const CardProduct = (props) => {
    return (
        <ContainerCard>
            <DivImg>
            <img src={props.product.photoUrl} alt={'foto do produto'}/>
            </DivImg>
            <DivText>
            <Typography variant={'body1'} color='secondary'>{props.product.name}</Typography>
            <Typography variant= {'subtitle2'} color='error'>{props.product.description}</Typography>
            <Typography variant={'body1'}>R$ {props.product.price}</Typography>
            </DivText>
            <DivButton>
            <button>Adicionar</button>
            </DivButton>
        </ContainerCard>

    )
}

export default CardProduct;