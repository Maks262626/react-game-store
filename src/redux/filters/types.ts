export enum SortOrder{
    DESC = 'desc',
    ASC = 'asc'
}
export type CategoryItem = {
    title: string,
    srcIcon: string
}
export interface FiltersTypes {
    categories: CategoryItem[],
    mainFilters: string[],
    mainFiltersActive: number,
    orderFilter: string,
    activeCaregoryIndex: number,
    currentPage: number,
    limit: number,
    searchValue: string
}