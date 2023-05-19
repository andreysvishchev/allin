import { StaticImageData } from 'next/image'

export type CatalogSectionType = {
    data: CatalogDataType
}

type CatalogDataType = {
    title: string
    items: CatalogProductType[]
}

type CatalogProductType = {
    title: string
    items: CatalogProductGroupType[]
}

type CatalogProductGroupType = {
    title: string
    href: string
    image: string | StaticImageData
}
