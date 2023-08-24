import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { OrderItem, OrderSliceTypes } from './types';

const initialState: OrderSliceTypes = {
  orders: []
};

const savedFavourites = localStorage.getItem('orders');
const savedFavouritesState:OrderSliceTypes = savedFavourites ? JSON.parse(savedFavourites) : initialState;

export const filterSlice = createSlice({
  name: 'orders',
  initialState: savedFavouritesState,
  reducers: {
    addOrder: (state, action:PayloadAction<OrderItem>) => {
      state.orders.push(action.payload);
    },
  },
 
})

export const { addOrder } = filterSlice.actions
export default filterSlice.reducer