import ArrowButton from '@/components/ui/ArrowButton/ArrowButton'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import { ProductCardDataType } from '@/components/ui/ProductCard/types'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classes from './OverflowSlider.module.scss'

type PropsType = {
    data: ProductCardDataType[]
}
const OverflowSlider = ({ data }: PropsType) => {
    const [swiper, setSwiper] = useState<SwiperType>()

    const nextSlide = () => {
        swiper?.slideNext()
    }
    const prevSlide = () => {
        swiper?.slidePrev()
    }

    return (
        <div className={classes.Wrap}>
            <div className={classes.Top}>
                <div className={classes.Title}>Вам может понравиться</div>
                <div className={classes.Buttons}>
                    <ArrowButton onClick={prevSlide} type='prev' color='dark' />
                    <ArrowButton onClick={nextSlide} type='next' color='light' />
                </div>
            </div>

            {data && data.length ?
                <Swiper
                    onSwiper={(swiper) => setSwiper(swiper)}
                    slidesPerView={'auto'}
                    spaceBetween={40}>
                    {data.map((el, i) =>
                        <SwiperSlide key={i} className={classes.Slide}>
                            <ProductCard data={el} />
                        </SwiperSlide>
                    )}
                </Swiper>
                : null}
        </div>
    )
}

export default OverflowSlider
