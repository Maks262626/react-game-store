export type OrderType = {
    id: string,
    thumbnail: string
}
export type OrderItem = {
    order: OrderType[]
    orderTotalPrice: number
}
export interface OrderSliceTypes {
    orders: OrderItem[]
}
