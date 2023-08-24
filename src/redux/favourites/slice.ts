import { createSlice } from '@reduxjs/toolkit'
import { FavouritesTypes } from './types';


const initialState:FavouritesTypes = {
  favourites: []
};

const savedFavourites = localStorage.getItem('favourites');
const savedFavouritesState:FavouritesTypes = savedFavourites ? JSON.parse(savedFavourites) : initialState;

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState : savedFavouritesState,
  reducers: {
    toggleFavourite: (state, action) => {
        const favoutire = state.favourites.find(item => item.id === action.payload.id);
        if(favoutire){
            state.favourites = state.favourites.filter(item => item.id !== action.payload.id);
        }else{
            state.favourites.push(action.payload);
        }
    },
  },
 
})

export const { toggleFavourite } = favouritesSlice.actions
export default favouritesSlice.reducer