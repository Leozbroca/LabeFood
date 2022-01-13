import React from "react";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import LabelBottomNavigation from '../../components/Footer/Footer'
import useProtectedPage from "../../hooks/useProtectedPage";

const CartPage = () => {
  useProtectedPage()
    const {setColors} = useContext(GlobalStateContext)

    useEffect(() => {
        setColors.setColorHome('')
        setColors.setColorCart('#5cb646')
        setColors.setColorProfile('')
    }, [])

    return (
        <div>
            <h1>CartPage</h1>
            <LabelBottomNavigation/>
        </div>
    )
}

export default CartPage;