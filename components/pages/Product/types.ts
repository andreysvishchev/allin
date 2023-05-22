import { OptionType } from '@/components/ui/CusomSelect/types'
import { ProductCardDataType } from '@/components/ui/ProductCard/types'
import { StaticImageData } from 'next/image'

export type ProductPageType = {
    data: ProductPageDataType
}

export type ProductPageDataType = {
    intro: ProductIntroType
    desc: string
    characteristics: CharacteristicType[]
    certificates: CertificateType[]
    products: ProductCardDataType[]
}

export type ProductIntroType = {
    images: StaticImageData[] | string[]
    title: string
    optionsList: OptionsListType[]
    article: string
    price: string
}

type OptionsListType = {
    title: string
    items: OptionType[]
}

type CharacteristicType = {
    name: string
    text: string
}

type CertificateType = {
    title: string
    href: string
}
