import React from "react";
import { useNavigate, useParams } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import BASE_URL from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { ContainerRestaurant, DivImagem, DivNome, DivTest, EsperaEFrete } from "./styles";
import CardProduct from "../../components/CardProduct/CardProduct";
import { goToCart , goToHome} from "../../router/coordinator";
import Header from '../../components/Header/Header'

const RestaurantPage = () => {
    useProtectedPage()
    const params = useParams()
    const navigate = useNavigate()
    const restaurantDetails = useRequestData([], `${BASE_URL}/restaurants/${params.restId}`)
    const details = restaurantDetails.restaurant

    const categories = details && details.products.map((product) => {
            return product.category
        })

    const filterCategories = categories && categories.filter((cate, index) => {
        return categories.indexOf(cate) === index;
    })

    

    const renderProducts = () => {
        const categoriesRender = 
        filterCategories && 
        filterCategories.map((categorie) => {
            return (
                <div key={Math.random()}>
                    <hr />
                    <p><b>{categorie}</b></p>
                    {details &&
                        details.products.map((prod) => {
                            if (categorie === prod.category) {
                                return (
                                    <CardProduct product={prod} key={prod.id}/>
                                )
                            }
                        })}
                </div>
            )
        })
        return categoriesRender
    }

    return (
        <ContainerRestaurant>
            <Header title={'Restaurante'} goTo={goToHome}/>
                <DivTest>
                <DivImagem src={details && details.logoUrl} />
                <DivNome>{details && details.name}</DivNome>
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
            </DivTest>
            <button onClick={() => goToCart(navigate)}>carrinho</button>
            {renderProducts()}
        </ContainerRestaurant>
    )
}

export default RestaurantPage;