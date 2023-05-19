import {FC} from 'react'
import classes from './Products.module.scss'
import {ProductsType} from './types'
import {useSection} from "@/components/pages/Section/store";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import Pagination from "@/components/ui/Pagination/Pagination";

const Products: FC<ProductsType> = ({}) => {
    const products = useSection(state => state.products)

    return (
        <div className={classes.Wrap}>
            <div className={classes.Grid}>
                {products && products.length ?
                    products.map(el =>
                        <ProductCard key={el.id} data={el}/>)
                    : null
                }
            </div>

            <Pagination/>

        </div>
    )
}

export default Products
