export type CartItem = {
    thumbnail: string,
    title: string,
    description: string,
    price: number,
    rating: number,
    id: string,
    count: number
}

export interface CartSliceTypes {
    items: CartItem[],
    totalPrice: number,
    itemsCount: number
}