import { DefaultLinkType } from '@/components/types/global'
import { StaticImageData } from 'next/image'

export type BaseSectionType = {
    data: BaseDataType
}

type BaseDataType = {
    title: string
    items: QuestDataType[]
    link: DefaultLinkType
}

type QuestDataType = {
    title: string
    text: string
    image: string | StaticImageData
    link: DefaultLinkType
}
