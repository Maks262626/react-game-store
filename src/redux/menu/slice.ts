import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import profileIcon from '../../assets/icon/profile.svg';
import searchIcon from '../../assets/icon/search.svg';
import likeIcon from '../../assets/icon/like.svg';
import walletIcon from '../../assets/icon/wallet.svg';
import { menuTypes } from './types';

const savedActivePath = localStorage.getItem('activePath');

const initialState:menuTypes = {
    data: [
        {title: "Catalog",path: "/",icon: searchIcon},
        {title: "Profile",path: "/profile",icon: profileIcon},
        {title: "Favorites",path: "/favourites",icon: likeIcon},
        {title: "Orders",path: "/orders",icon: walletIcon}
    ],
    activePath: savedActivePath ? savedActivePath :  "/",
    isBurgerActive: false 
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setActivePath(state,action: PayloadAction<string>){
            state.activePath = action.payload
        },
        setIsBurgerActive(state,action: PayloadAction<boolean>){
            state.isBurgerActive = action.payload
        }
    }
});

export const {setActivePath,setIsBurgerActive} = menuSlice.actions;
export default menuSlice.reducer