import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem, CartSliceTypes } from './types';



const initialState:CartSliceTypes = {
    items: [],
    totalPrice: 0,
    itemsCount: 0
};



const savedCart = localStorage.getItem('cart');
const savedCartState:CartSliceTypes = savedCart ? JSON.parse(savedCart) : initialState;


export const cartSlice = createSlice({
  name: 'cart',
  initialState: savedCartState,
  reducers: {
    addItem: (state,action: PayloadAction<CartItem>) => {
        const cartItem = state.items.find(item => item.id === action.payload.id);
        if(cartItem){
            cartItem.count++;
        }else{
            state.items.push({...action.payload})
        }
        state.totalPrice += action.payload.price;
        state.itemsCount++;
    },
    removeItem: (state,action: PayloadAction<CartItem>) => {
        const cartItem = state.items.find(item => item.id === action.payload.id);
        if(cartItem){
            cartItem.count--;
            state.totalPrice -= action.payload.price;
            state.itemsCount--;
        }
    },
    deleteItem: (state,action: PayloadAction<CartItem>) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.totalPrice -= action.payload.price*action.payload.count;
        state.itemsCount -= action.payload.count;
    },
    deleteAllItems: (state) =>{
        state.items = [];
        state.totalPrice = 0;
        state.itemsCount = 0;
    }
  },
})


export const { addItem,removeItem,deleteItem,deleteAllItems } = cartSlice.actions

export default cartSlice.reducer