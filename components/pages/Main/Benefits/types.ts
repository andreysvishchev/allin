import { StaticImageData } from 'next/image'

export type BenefitsSectionType = {
    data: BenefitsDataType
}

type BenefitsDataType = {
    title: string
    items: BenefitElementType[]
}

type BenefitElementType = {
    num: string
    title: string
    text: string
    icon: string | StaticImageData
}
