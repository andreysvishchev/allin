import { DefaultLinkType } from '@/components/types/global'
import { BannerType } from '../Banner/types'

export type LayoutType = {
    title: string
    keywords: string
    description: string
    breadcrumbs?: DefaultLinkType[]
    banner?: BannerType
}
