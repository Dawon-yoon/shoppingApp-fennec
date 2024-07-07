import { createSlice } from "@reduxjs/toolkit";

const getCartFromSessionStorage = () => {
    const storedCart = sessionStorage.getItem('cartList');
    return storedCart? JSON.parse(storedCart) : [];
}

const saveCartToSessionStorage = (cart) => {
    sessionStorage.setItem('cartList', JSON.stringify(cart));
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: getCartFromSessionStorage(),
    },
    reducers: {
        addToCartList: (state, action) => {
            state.cartList.push(action.payload);
            saveCartToSessionStorage(state.cartList);
        },
        updateOrderStock: (state, action) => {
            const { index, orderStock } = action.payload;
            state.cartList[index].orderStock = orderStock;
        },
        removeFromCartList: (state, action) => { 
            state.cartList.splice(action.payload, 1);
            saveCartToSessionStorage(state.cartList);
        },
        loadCart: (state) => { 
            state.cartList = getCartFromSessionStorage();
        }
    }
})

export const {
    addToCartList,
    removeFromCartList,
    loadCart,
    updateOrderStock
} = cartSlice.actions
export default cartSlice.reducer;