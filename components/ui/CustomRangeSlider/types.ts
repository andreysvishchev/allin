import {FilterPriceType} from "@/components/pages/Section/types";

export type RangeSliderType = FilterPriceType & {
    onChange: (value: number[] | number) => void
}