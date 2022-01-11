import React from "react";
import { useContext } from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { DivCentralizando, DivImagem, DivNome, DivTest, EsperaEFrete } from "./styles";

const HomePage = () => {
   const {restaurants} = useContext(GlobalStateContext)

   const listaRestaurantes = restaurants.map((restaurante) => {
       return (
        <DivTest key={restaurante.id}>
            <DivImagem src={restaurante.logoUrl}/>
            <DivNome>{restaurante.name}</DivNome>
            <EsperaEFrete>
                <div>{restaurante.deliveryTime - 10} - {restaurante.deliveryTime} min</div>
                <div>Frete R${restaurante.shipping},00</div>
            </EsperaEFrete>
        </DivTest> 
       )
   })

    return (
        <div>
            <h1>HomePage</h1>
            <DivCentralizando>
                {listaRestaurantes}
            </DivCentralizando>   
        </div>
    )
}

export default HomePage;