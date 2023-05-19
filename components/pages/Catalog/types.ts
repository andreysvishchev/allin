import { SectionItemDataType } from '@/components/pages/Catalog/SectionItem/types'

export type CatalogType = {
    data: CategoryType[]
}

type CategoryType = {
    title: string
    items: SectionItemDataType[]
}
