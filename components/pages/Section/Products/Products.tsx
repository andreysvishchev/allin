import { useSection } from "@/components/pages/Section/store"
import CustomSelect from '@/components/ui/CusomSelect/CustomSelect'
import { OptionType } from '@/components/ui/CusomSelect/types'
import Pagination from "@/components/ui/Pagination/Pagination"
import ProductCard from "@/components/ui/ProductCard/ProductCard"
import { useState } from 'react'
import classes from './Products.module.scss'

const options: OptionType[] = [
    { value: '', label: 'Сортировать', },
    { value: 'max', label: 'По популярности', },
    { value: 'min', label: 'По популярности', },
    { value: 'max', label: 'По цене', },
    { value: 'min', label: 'По цене', },
]

const Products = () => {
    const products = useSection(state => state.products)
    const [sort, setSort] = useState<OptionType>(options[0])

    const changeSort = (value: OptionType) => {

    }

    return (
        <div className={classes.Wrap}>
            <CustomSelect className={classes.Sort} value={sort} options={options} onChange={changeSort} />
            <div className={classes.Grid}>
                {products && products.length ?
                    products.map(el =>
                        <ProductCard key={el.id} data={el} />)
                    : null
                }
            </div>

            <Pagination />

        </div>
    )
}

export default Products
