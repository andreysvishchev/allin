import { StaticImageData } from 'next/image'

export type BannerType = {
    data: BannerDataType
    type: string
}

export type BannerDataType = {
    title: string
    subtitle?: string
    image: string | StaticImageData
}
