import { StaticImageData } from 'next/image'

export type HelpSection = {
    data: HelpDataType
}

type HelpDataType = {
    title: string
    items: HelpElementType[]
}

type HelpElementType = {
    title: string
    image: string | StaticImageData
}
