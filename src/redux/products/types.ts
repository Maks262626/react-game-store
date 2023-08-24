export interface fetchTotalProductsTypes {
    currentCategory: string,
    searchValue: string
}
export interface FetchDataTypes {
    currentCategory: string,
    searchValue: string,
    currentFilter: string,
    orderFilter: string,
    currentPage: number,
    limit: number
}
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}
export type ProductType = {
    id: string,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export interface productsTypes {
    data: ProductType[],
    total: number,
    status: Status,
    isMounting: boolean
}