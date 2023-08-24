import { useDispatch } from 'react-redux';
import { Middleware, configureStore } from '@reduxjs/toolkit'
import filterReducer from './filters/slice';
import productsReducer from './products/slice';
import cartReducer from './cart/slice';
import ordersReducer from './orders/slice';
import favouritesReducer from './favourites/slice';
import profileReducer from './profile/slice';
import menuReducer from './menu/slice';

const someFunctionMiddleware: Middleware = store => next => action => {
  const result = next(action);
  if (action.type.includes('cart')) {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
  }else if(action.type.includes('favourites')){
    localStorage.setItem('favourites',JSON.stringify(store.getState().favourites));
  }else if(action.type.includes('orders')){
    localStorage.setItem('orders',JSON.stringify(store.getState().orders));
  }else if(action.type === 'menu/setActiveMenuIndex'){
    localStorage.setItem('activePath',store.getState().menu.activePath);
  }

  return result;
};

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    favourites: favouritesReducer,
    profile: profileReducer,
    menu: menuReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(someFunctionMiddleware),
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();