import {StaticImageData} from "next/image";

export type ProductCardType = {
    data: ProductCardDataType
}

export type ProductCardDataType = {
    title: string
    href: string
    id: string
    image: string | StaticImageData
    weight: string
    price: string
    cvd?: string
}