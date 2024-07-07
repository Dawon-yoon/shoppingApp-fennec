import { configureStore } from "@reduxjs/toolkit";
import commonUiReducer from "../reducer/commonUiSlice";
import productReducer from "../reducer/productSlice";
import cartReducer from "../reducer/cartSlice";

export const store = configureStore({
    reducer: {
        ui: commonUiReducer,
        product: productReducer,
        cart:cartReducer,
    },
});
