import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated:false,
    },
    reducers: {
        userLogin: (state) => { 
            state.isAuthenticated = true;
        },
        userLogout: (state) => { 
            state.isAuthenticated = false;
        }
    }
})

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;