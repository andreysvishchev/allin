import {DefaultLinkType} from "@/components/types/global";

export type FooterDataType = {
    navigation: FooterNavItemType []
}

type FooterNavItemType = {
    title: string
    items: DefaultLinkType []
}