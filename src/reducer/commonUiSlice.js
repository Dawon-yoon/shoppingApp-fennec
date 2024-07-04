import { createSlice } from "@reduxjs/toolkit";

const commonUiSlice = createSlice({
    name: 'ui',
    initialState: {
        isSidebarOpen:false,
    },
    reducers: {
        toggleSidebar:(state) =>{ 
            state.isSidebarOpen=!state.isSidebarOpen;
        }
    }
})

export const { toggleSidebar } = commonUiSlice.actions;
export default commonUiSlice.reducer;