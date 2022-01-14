import React from "react"
import { DivImagem, DivNome, DivTest, EsperaEFrete } from "./styles"

const CardRestaurant = (props) => {
    return (
        <DivTest onClick={props.changePage}>
            <DivImagem src={props.restaurant.logoUrl} />
            <DivNome ><b>{props.restaurant.name}</b></DivNome>
            <EsperaEFrete>
                <div>{props.restaurant.deliveryTime - 10} - {props.restaurant.deliveryTime} min</div>
                <div>Frete R${props.restaurant.shipping},00</div>
                {/* <button onClick={() => { goToRestDetails(restaurante.id) }}>TESTE</button> */}
            </EsperaEFrete>
        </DivTest>
    )

}

export default CardRestaurant;