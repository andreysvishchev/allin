import CustomImage from '@/components/global/CustomImage/CustomImage'
import { ProductCardType } from '@/components/ui/ProductCard/types'
import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import classes from './ProductCard.module.scss'

const ProductCard: FC<ProductCardType> = ({ data }) => {
    const router = useRouter()

    const [counter, setCounter] = useState(0)

    const onClickHandler = () => {
        router.push(data.href)
    }

    const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setCounter(counter + 1)
    }

    const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setCounter(counter + 1)
    }

    const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (counter === 0) return

        setCounter(counter - 1)
    }

    return (
        <div
            onClick={onClickHandler}
            className={cn(classes.Wrap, { [classes.NotBasket]: counter === 0 })}>
            <div className={classes.Preview}>
                {data?.image && (
                    <div className={classes.Image}>
                        <CustomImage
                            fill
                            src={data.image}
                            alt={''}
                        />
                    </div>
                )}
                <div className={classes.Info}>
                    {data?.title && <h6 className={classes.Title}>{data.title}</h6>}
                    <button
                        onClick={e => addToBasket(e)}
                        className={cn(classes.Button, {
                            [classes.Empty]: counter === 0
                        })}>
                        <div className={classes.Background} />
                        <span>
                            <span>{counter > 0 ? 'Товар в корзине' : 'добавить в корзину'}</span>
                        </span>
                    </button>
                    <CSSTransition
                        in={counter > 0}
                        timeout={250}
                        mountOnEnter={true}
                        unmountOnExit={true}>
                        {() => (
                            <div className={classes.Counter}>
                                <button
                                    onClick={e => decrement(e)}
                                    className={classes.Minus}
                                />
                                <span className={classes.Num}>{counter}</span>
                                <button
                                    onClick={e => increment(e)}
                                    className={classes.Plus}
                                />
                            </div>
                        )}
                    </CSSTransition>
                </div>
            </div>
            <div className={classes.Bot}>
                {data?.weight && <div className={classes.Weight}>{data.weight} мг</div>}
                {data?.cvd && <div className={classes.CVD}>{data.cvd} CBD</div>}
                {data?.price && <div className={classes.Price}>{data.price}₽</div>}
            </div>
        </div>
    )
}

export default ProductCard
