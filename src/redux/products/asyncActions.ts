import axios from "axios";
import { FetchDataTypes, ProductType, fetchTotalProductsTypes } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTotalProducts = createAsyncThunk<number, fetchTotalProductsTypes>('products/fetchTotalProducts',
    async (payload) => {
        const url = new URL('https://64d770f32a017531bc133f77.mockapi.io/items');
        const { currentCategory, searchValue } = payload;
        
        currentCategory !== 'all' && url.searchParams.append('category', currentCategory);
        searchValue && url.searchParams.append('search', searchValue);

        const { data } = await axios.get<ProductType[]>(url.toString());
        const total = data.length;
        return total;
    });

export const fetchData = createAsyncThunk<ProductType[], FetchDataTypes>('products/fetchData',
    async (payload) => {

        const { currentCategory, searchValue, currentFilter, orderFilter, currentPage, limit } = payload;
        const url = new URL('https://64d770f32a017531bc133f77.mockapi.io/items');

        currentCategory !== 'all' && url.searchParams.append('category', currentCategory);
        searchValue && url.searchParams.append('search', searchValue)
        currentFilter !== 'none' && url.searchParams.append('sortBy', currentFilter);
        url.searchParams.append('order', orderFilter);
        url.searchParams.append('p', currentPage.toString());
        url.searchParams.append('l', limit.toString());

        const { data } = await axios.get<ProductType[]>(url.toString());
        return data;
    });