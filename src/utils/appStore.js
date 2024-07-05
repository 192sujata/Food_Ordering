import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import {useSelector as useAppSelector, useDispatch as useAppDispatch} from "react-redux";


const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

const useSelector = useAppSelector;
const useDispatch = useAppDispatch;
export {appStore, useSelector, useDispatch};