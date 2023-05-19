import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {ParamsType, SectionDataType, SectionStoreType} from "@/components/pages/Section/types";


export const useSection = create<SectionStoreType>()(
    immer(set => ({
        products: [],
        filters: null,
        sort: {},
        catalogLinks: [],
        isLoading: false,
        initState: (data: SectionDataType) => set((state) => {
            state.products = data.products,
                state.filters = data.filters,
                state.sort = data.sort,
                state.catalogLinks = data.catalogLinks
        }),
        changeRangePrice: (value: number[] | number) => set((state) => {
            if (!Array.isArray(value)) {
                return
            }
            if (state.filters) {
                state.filters.price.minValue = value[0]
                state.filters.price.maxValue = value[1]
            }
        }),
        changeParams: (name: string, value: string) => set((state) => {
            if (state.filters?.params) {
                const changedParams = state.filters.params[name as keyof ParamsType].values
                    .map((el => el.value === value ? {
                        ...el,
                        active: !el.active
                    } : el))
                state.filters.params[name as keyof ParamsType].values = changedParams
            }
        })
    }))
)
