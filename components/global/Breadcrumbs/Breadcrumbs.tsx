import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import Container from '../Container/Container'
import classes from './Breadcrumbs.module.scss'
import { BreadcrumbsType } from './types'

const Breadcrumbs: FC<BreadcrumbsType> = ({ path, className }) => {
    return (
        <div className={cn(classes.Wrap, className)}>
            <Container>
                <div className={classes.List}>
                    {path?.map((item, index) =>
                        index !== path.length - 1 ? (
                            <Link
                                href={`${item.href}`}
                                className={classes.Link}
                                key={index}>
                                {item.title}
                            </Link>
                        ) : (
                            <span
                                className={classes.LastItem}
                                key={index}>
                                {item.title}
                            </span>
                        )
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Breadcrumbs
