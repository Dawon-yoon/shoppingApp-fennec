import { configureStore } from "@reduxjs/toolkit";
import commonUiReducer from "../reducer/commonUiSlice";
import productReducer from "../reducer/productSlice";

export const store = configureStore({
    reducer: {
        ui: commonUiReducer,
        product:productReducer,
    },
});
