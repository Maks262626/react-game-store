import { createSlice } from '@reduxjs/toolkit'
import { Status, productsTypes } from './types';
import { fetchData, fetchTotalProducts } from './asyncActions';

const initialState:productsTypes = {
    data: [],
    total: 0,
    status: Status.LOADING,
    isMounting: true
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state,action) => {
        state.data = action.payload;
    },
    setIsMounting: (state,action) => {
      state.isMounting = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = Status.LOADING;
      state.data = []
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });
  
    builder.addCase(fetchData.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = [];
    });
    builder.addCase(fetchTotalProducts.fulfilled, (state,action) => {
      state.total = action.payload;
    })
    builder.addCase(fetchTotalProducts.rejected, () => {
      console.error("Failed loading total count of products");
    })
  }
})

export const { setData,setIsMounting } = productsSlice.actions
export default productsSlice.reducer