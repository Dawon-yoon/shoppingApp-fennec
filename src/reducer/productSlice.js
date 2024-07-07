import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = `http://localhost:4000/products`;

export const getProductsAll = createAsyncThunk('product/fetchAll', async (_, { rejectWithValue}) => { 
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getProductsBags = createAsyncThunk('product/getOnlyBags', async (_, { rejectWithValue }) => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.filter(item => item.category === 'bag');
     } catch (error) { 
        return rejectWithValue(error.message);
    }
})

export const getProductsWallets = createAsyncThunk('product/getOnlyWallets', async (_, { rejectWithValue }) => { 
    try { 
        let response = await fetch(url);
        let data = await response.json();
        return data.filter(item => item.category === 'wallet');
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getProductsAcc = createAsyncThunk('product/getOnlyAcc', async (_, { rejectWithValue }) => { 
    try { 
        let response = await fetch(url);
        let data = await response.json();
        return data.filter(item => item.category === 'acc');
    } catch (error) { 
        return rejectWithValue(error.message);
    }
})

export const getProductDetail = createAsyncThunk('product/getDetail', async (id , { rejectWithValue }) => { 
    try { 
        let response = await fetch(`${url}/${id}`);
        let data = await response.json();
        return data;
    }catch (error) { 
        return rejectWithValue(error.message);
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        products: [],
        product:[],
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => { 
        builder
            .addCase(getProductsAll.pending, (state) => { 
            state.isLoading = true;
        })
            .addCase(getProductsAll.fulfilled, (state,action) => { 
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProductsAll.rejected, (state,action) => { 
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getProductsBags.pending, (state) => { 
                state.isLoading = true;
            })
            .addCase(getProductsBags.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.products = action.payload
            })
            .addCase(getProductsBags.rejected, (state, action) => { 
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getProductsWallets.pending, (state) => { 
                state.isLoading = true;
            })
            .addCase(getProductsWallets.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProductsWallets.rejected, (state, action) => { 
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getProductsAcc.pending, (state) => { 
                state.isLoading = true;
            })
            .addCase(getProductsAcc.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProductsAcc.rejected, (state, action) => { 
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getProductDetail.pending, (state) => { 
                state.isLoading = true;
            })
            .addCase(getProductDetail.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(getProductDetail.rejected, (state, action) => { 
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const productActions = {
    getProductsAll,
    getProductsBags,
    getProductsWallets,
    getProductsAcc,
    getProductDetail
};
export default productSlice.reducer;