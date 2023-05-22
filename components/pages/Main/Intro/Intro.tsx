import Container from '@/components/global/Container/Container'
import CustomImage from '@/components/global/CustomImage/CustomImage'
import ArrowButton from '@/components/ui/ArrowButton/ArrowButton'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import { FC, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classes from './Intro.module.scss'
import { IntroSectionType } from './types'

const Intro: FC<IntroSectionType> = ({ data }) => {
    const [swiper, setSwiper] = useState<SwiperType>()

    const nextSlide = () => {
        swiper?.slideNext()
    }
    const prevSlide = () => {
        swiper?.slidePrev()
    }
    return (
        <section className={classes.Section}>
            <Swiper className={classes.Slider}
                onSwiper={(swiper) => setSwiper(swiper)}>
                {data && data.length
                    ? data.map((el, i) => (
                        <SwiperSlide
                            key={i}
                            className={classes.Slide}>
                            <div className={classes.Image}>
                                <CustomImage
                                    fill
                                    src={el.image}
                                    alt={''}
                                />
                            </div>
                            <div className={classes.Info}>
                                {el.title && (
                                    <h1
                                        className={classes.Title}
                                        dangerouslySetInnerHTML={{ __html: el.title }}
                                    />
                                )}
                                {el.text && (
                                    <div
                                        className={classes.Text}
                                        dangerouslySetInnerHTML={{ __html: el.text }}
                                    />
                                )}
                                {el.link && (
                                    <Button>
                                        <Link href={el.link.href}>{el.link.title}</Link>
                                    </Button>
                                )}
                            </div>
                        </SwiperSlide>
                    ))
                    : null}
            </Swiper>
            <Container className={classes.Container}>
                <div className={classes.Buttons}>
                    <ArrowButton type='prev' color='transparent' onClick={prevSlide} />
                    <ArrowButton type='next' color='light' onClick={nextSlide} />
                </div>

            </Container>


        </section>
    )
}

export default Intro
