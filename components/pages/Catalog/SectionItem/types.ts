import {ProductCardDataType} from "@/components/ui/ProductCard/types";

export type SectionItemType = {
    reverse: boolean
    data: SectionItemDataType
}

export type SectionItemDataType = {
    title: string
    desc: string
    href: string
    items: ProductCardDataType []
}
