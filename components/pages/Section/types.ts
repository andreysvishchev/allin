import {ProductCardDataType} from "@/components/ui/ProductCard/types";
import {DefaultLinkType} from "@/components/types/global";

export type SectionStoreType = SectionDataType & {
    initState: (data: SectionDataType) => void
    changeRangePrice: (value: number [] | number) => void
    changeParams: (name: string, value: string)=> void
}

export type SectionDataType = {
    products: ProductCardDataType[]
    catalogLinks: CatalogLinksType []
    filters: FiltersType | null
    sort: {} | null
}

type CatalogLinksType = {
    title: string
    links: DefaultLinkType[]
}

export type FiltersType = {
    price: FilterPriceType
    params: ParamsType
}

export type FilterPriceType = {
    maxValue: number
    minValue: number
    minPrice: number
    maxPrice: number
}

export type ParamsType = {
    contents: ParamType
    concentration: ParamType
    size: ParamType
}

type ParamType = {
    title: string
    values: ValueType[]
}

type ValueType = {
    value: string
    title: string
    quantity: string
    active: boolean
}
