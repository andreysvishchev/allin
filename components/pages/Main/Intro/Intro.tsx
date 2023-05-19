import CustomImage from '@/components/global/CustomImage/CustomImage'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import classes from './Intro.module.scss'
import { IntroSectionType } from './types'

const Intro: FC<IntroSectionType> = ({ data }) => {
    return (
        <section className={classes.Section}>
            <Swiper className={classes.Slider}>
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
        </section>
    )
}

export default Intro
