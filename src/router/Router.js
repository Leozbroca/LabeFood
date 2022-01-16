import React from "react";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import AdressPage from "../pages/AdressPage/AdressPage";
import EditAdressPage from "../pages/EditAdressPage/EditAdressPage";
import EditSignUpPage from "../pages/EditSignUpPage/EditSignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<HomePage />} />

                <Route path='/login' element={<LoginPage />} />

                <Route path='/signup' element={<SignUpPage />} />

                <Route path='/editsignup' element={<EditSignUpPage />} />

                <Route path='/adress' element={<AdressPage />} />

                <Route path='/editaddress' element={<EditAdressPage />} />

                <Route path='/restaurants/:restId' element={<RestaurantPage />} />

                <Route path='/profile' element={<ProfilePage />} />

                <Route path='/cart/' element={<CartPage />} />

                <Route path='*' element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;