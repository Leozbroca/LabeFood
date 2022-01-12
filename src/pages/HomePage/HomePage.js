import React, { useContext } from "react";
import { useNavigate } from "react-router";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import { DivCentralizando, DivImagem, DivNome, DivTest, EsperaEFrete } from "./styles";
import { goToRestaurant } from "../../router/coordinator";

const HomePage = () => {
    const navigate = useNavigate()
    const {restaurants} = useContext(GlobalStateContext)

    const goToRestDetails = (id) => {
        goToRestaurant(navigate,id)
    }

   const listaRestaurantes = restaurants.map((restaurante) => {
       return (
        <DivTest key={restaurante.id}>
            <DivImagem src={restaurante.logoUrl}/>
            <DivNome >{restaurante.name}</DivNome>
            <EsperaEFrete>
                <div>{restaurante.deliveryTime - 10} - {restaurante.deliveryTime} min</div>
                <div>Frete R${restaurante.shipping},00</div>
                <button onClick={() => {goToRestDetails(restaurante.id)}}>TESTE</button>
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