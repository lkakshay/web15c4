import { configureStore } from "@reduxjs/toolkit";
import authInfoReducer from "./authReducer";
import productInfoReducer from "./productReducer";

export const store=configureStore({
    reducer:{
        authInfoReducer,
        productInfoReducer
    }
})

