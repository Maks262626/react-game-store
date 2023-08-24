import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import allIcon from '../../assets/icon/all.svg';
import computer from '../../assets/icon/computer.svg';
import headphones from '../../assets/icon/headphones.svg';
import vr from '../../assets/icon/vr.svg';
import mouse from '../../assets/icon/mouse.svg';
import keyboard from '../../assets/icon/keyboard.svg';
import smartphone from '../../assets/icon/smartphone.svg';
import { FiltersTypes, SortOrder } from './types';




const initialState: FiltersTypes = {
  categories: [
    { title: "all", srcIcon: allIcon },
    { title: "computer", srcIcon: computer },
    { title: "headphones", srcIcon: headphones },
    { title: "vr", srcIcon: vr },
    { title: "mouse", srcIcon: mouse },
    { title: "keyboard", srcIcon: keyboard },
    { title: "smartphone", srcIcon: smartphone }
  ],
  mainFilters: ["none", "price", "rating", "brand"],
  mainFiltersActive: 0,
  orderFilter: SortOrder.ASC,
  activeCaregoryIndex: 0,
  currentPage: 1,
  limit: 3,
  searchValue: ""
};
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setMainFiltersActive: (state, action: PayloadAction<number>) => {
      state.mainFiltersActive = action.payload;
    },
    setOrderFilter: (state, action: PayloadAction<string>) => {
      state.orderFilter = action.payload;
    },
    setActiveCaregoryIndex: (state, action: PayloadAction<number>) => {
      state.activeCaregoryIndex = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setFilters: (state, action: PayloadAction<Record<string,string>>) => {
      state.currentPage = +action.payload.p;
      state.mainFiltersActive = +state.mainFilters.indexOf(action.payload.sortBy);
      state.orderFilter = action.payload.order;
      state.searchValue = action.payload.search;
      state.activeCaregoryIndex = +state.categories.findIndex(category => category.title === action.payload.category);
    }
  },

})


export const {
  setMainFiltersActive,
  setOrderFilter,
  setActiveCaregoryIndex,
  setCurrentPage,
  setSearchValue,
  setFilters
} = filterSlice.actions

export default filterSlice.reducer