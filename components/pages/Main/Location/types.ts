import { DefaultLinkType } from '@/components/types/global'
import { StaticImageData } from 'next/image'

export type LocationSectionType = {
    data: LocationDataType
}

type LocationDataType = {
    title: string
    map: StaticImageData | string
    address: string
    phone: string
    email: string
    items: StaticImageData[] | string[]
    link: DefaultLinkType
}
