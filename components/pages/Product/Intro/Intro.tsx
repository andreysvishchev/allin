import CustomImage from '@/components/global/CustomImage/CustomImage'
import IconMinus from '@/components/icons/IconMinus'
import IconPlus from '@/components/icons/IconPlus'
import Button from '@/components/ui/Button/Button'
import { OptionType } from '@/components/ui/CusomSelect/types'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductIntroType } from '../types'
import Dropdown from './Dropdown/Dropdown'
import classes from './Intro.module.scss'

type PropsType = {
    data: ProductIntroType
}

const Intro = ({ data }: PropsType) => {
    const [swiper, setSwiper] = useState<SwiperType>()
    const [counter, setCounter] = useState(1)
    const [currentOption, setCurrentOption] = useState<any>()


    useEffect(() => {
        const optionsArray = data.optionsList.map(el => el.items)
        console.log(optionsArray)
    }, [])

    const changeConcentration = (value: OptionType) => {

    }

    const increment = () => {
        setCounter(prev => prev + 1)
    }

    const decrement = () => {
        if (counter === 1) {
            return
        }

        setCounter(prev => prev - 1)
    }

    return (
        <div className={classes.Wrap}>
            <div className={classes.Container}>
                <div className={classes.Slider}>
                    <div className={classes.Thumbs}>
                        {data.images && data.images.length ?
                            data.images.map((el, i) =>
                                <div onClick={() => swiper?.slideTo(i)} className={classes.Thumb} key={i}>
                                    <CustomImage fill src={el} alt={''} />
                                </div>
                            )
                            : null
                        }
                    </div>
                    <Swiper
                        spaceBetween={20}
                        className={classes.Swiper}
                        onSwiper={(swiper) => setSwiper(swiper)}>
                        {data.images && data.images.length ?
                            data.images.map((el, i) =>
                                <SwiperSlide className={classes.Slide} key={i}>
                                    <CustomImage fill src={el} alt={''} />
                                </SwiperSlide>
                            )
                            : null
                        }
                    </Swiper>
                </div>
                <div className={classes.Info}>
                    <div className={classes.Article}>{data.article}</div>
                    <h2 className={classes.Title}>{data.title}</h2>
                    <div className={cn(
                        { [classes.Row]: data.optionsList.length < 1 },
                        { [classes.Grid]: data.optionsList.length > 1 })}>
                        {data.optionsList && data.optionsList.length ?
                            data.optionsList.map((el, i) =>
                                <Dropdown key={i}
                                    onChange={changeConcentration}
                                    title={el.title}
                                    value={el.items[0]}
                                    options={el.items} />
                            ) : null
                        }
                    </div>
                    <div className={classes.Price}>{data.price}₽</div>
                    <div className={classes.Controls}>
                        <Button className={classes.Button}>
                            <button>
                                Добавить в корзину
                            </button>
                        </Button>
                        <div className={classes.Counter}>
                            <button onClick={decrement} className={classes.CounterBtn}>
                                <IconMinus />
                            </button>
                            <div className={classes.CounterValue}>{counter}</div>
                            <button onClick={increment} className={classes.CounterBtn}>
                                <IconPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Intro
