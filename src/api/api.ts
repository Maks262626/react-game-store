import axios from "axios";
import { ProductType } from "../redux/products/types";

const instance = axios.create({
    baseURL: "https://64d770f32a017531bc133f77.mockapi.io",
})

export const productsAPI = {
    getProduct(id:string){
        return instance.get<ProductType>(`/items/${id}`);
    },
    getProducts(){
        return instance.get<ProductType[]>("/items");
    },
    getBanners(){
        return instance.get<ProductType[]>("/banners");
    }
}
