import React, { useEffect } from "react";
import { useParams } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import BASE_URL from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { ContainerRestaurant, DivImagem, DivNome, DivTest, EsperaEFrete } from "./styles";
import CardProduct from "../../components/CardProduct/CardProduct";
import { goToHome } from "../../router/coordinator";
import Header from '../../components/Header/Header'
import { useContext } from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const RestaurantPage = () => {
    useProtectedPage()
    const { setRestaurantDetail } = useContext(GlobalStateContext)
    const params = useParams()
    const restaurantDetails = useRequestData([], `${BASE_URL}/restaurants/${params.restId}`)
    const details = restaurantDetails.restaurant

    //Localizar informações Restaurante
    const getRestaurantDetails = () => {
        axios.get(`${BASE_URL}/restaurants/${params.restId}`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((response) => {
                setRestaurantDetail(response.data.restaurant)
            })
            .catch((error) => {
                alert('Ocorreu um erro, tente novamente')
            })
    }

    //Iniciar função
    useEffect(() => {
        getRestaurantDetails()
    }, [])

    //Renderiza Info Categoria
    const categories = details && details.products.map((product) => {
        return product.category
    })

    const filterCategories = categories && categories.filter((cate, index) => {
        return categories.indexOf(cate) === index;
    })

    const renderProducts = () => {

        const categoriesRender = filterCategories &&
            filterCategories.map((categorie) => {
                return (
                    <div key={Math.random()}>
                        <hr />
                        <p><b>{categorie}</b></p>
                        {details &&
                            details.products.map((prod) => {
                                if (categorie === prod.category) {
                                    return (
                                        <CardProduct product={prod} key={prod.id} />
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

            <ToastContainer position='top-center' autoClose={2000} />

            <Header title={'Restaurante'} goTo={goToHome} />

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
            
            {renderProducts()}
        </ContainerRestaurant>
    )
}

export default RestaurantPage;