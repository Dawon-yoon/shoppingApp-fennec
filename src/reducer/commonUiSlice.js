import { createSlice } from "@reduxjs/toolkit";

const commonUiSlice = createSlice({
    name: 'ui',
    initialState: {
        isSidebarOpen: false,
        isSearchbarOpen:false,
    },
    reducers: {
        toggleSidebar:(state) =>{ 
            state.isSidebarOpen=!state.isSidebarOpen;
        },
        toggleSearchbar: (state) => { 
            state.isSearchbarOpen = !state.isSearchbarOpen;
        }
    }
})

export const {
    toggleSidebar, toggleSearchbar
} = commonUiSlice.actions;
export default commonUiSlice.reducer;