import { SectionItemType } from '@/components/pages/Catalog/SectionItem/types'
import Button from '@/components/ui/Button/Button'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import classes from './SectionItem.module.scss'

const SectionItem: FC<SectionItemType> = ({ data, reverse }) => {
    return (
        <div className={cn(classes.Wrap, { [classes.Reverse]: reverse })}>
            {data?.title && data?.href ? (
                <Link className={classes.Link} href={data.href}>
                    {data.title}
                </Link>
            ) : null}
            <div className={classes.Inner}>
                <div className={classes.Info}>
                    {data?.desc && <div className={classes.Desc}>{data.desc}</div>}
                    {data?.href && (
                        <Button>
                            <Link href={data.href}>Перейти в раздел</Link>
                        </Button>
                    )}
                </div>
                <div className={classes.Cards}>
                    {data?.items && data?.items.length ? data.items.map(el => <ProductCard key={el.id} data={el} />) : null}
                </div>
            </div>
        </div>
    )
}

export default SectionItem
