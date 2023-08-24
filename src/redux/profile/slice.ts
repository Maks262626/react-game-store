import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import GentleCat from '../../assets/img/GentleCat.jpg'
import bg from '../../assets/img/NotFoundBG.png';
import { ProfileTypes } from './types';



const initialState:ProfileTypes = {
    avatar: GentleCat,
    bg,
    name: "Maks",
    status: "Manners describe people"
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAvatar: (state,action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setBg: (state,action: PayloadAction<string>) => {
      state.bg = action.payload;
    },
    setName: (state,action: PayloadAction<string>) =>{
      state.name = action.payload
    },
    setStatus: (state,action: PayloadAction<string>) =>{
      state.status = action.payload
    }
  },
})
export const { setAvatar,setName,setStatus,setBg } = profileSlice.actions


export default profileSlice.reducer