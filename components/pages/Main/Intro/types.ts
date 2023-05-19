import { DefaultLinkType } from '@/components/types/global'
import { StaticImageData } from 'next/image'

export type IntroSectionType = {
    data: IntroSlideDataType[]
}

type IntroSlideDataType = {
    title?: string
    text: string
    image: string | StaticImageData
    link: DefaultLinkType
}
