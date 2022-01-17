import React from "react"
import { DivImg, DivName, ContainerCard, DivInfo } from "./styles"

const CardRestaurant = (props) => {
    return (
        <ContainerCard onClick={props.changePage}>

            <DivImg src={props.restaurant.logoUrl} />
            
            <DivName ><b>{props.restaurant.name}</b></DivName>
            
            <DivInfo>
                <div>{props.restaurant.deliveryTime - 10} - {props.restaurant.deliveryTime} min</div>
                <div>Frete R${props.restaurant.shipping},00</div>
            </DivInfo>
        </ContainerCard>
    )

}

export default CardRestaurant;