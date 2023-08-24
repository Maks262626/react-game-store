export type MenuItem = {
    title: string,
    path: string,
    icon: string,
}
export interface menuTypes{
    data: MenuItem[],
    activePath: string,
    isBurgerActive: boolean
}