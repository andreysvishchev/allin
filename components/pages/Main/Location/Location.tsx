import Container from '@/components/global/Container/Container'
import CustomImage from '@/components/global/CustomImage/CustomImage'
import Title from '@/components/global/Title/Title'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import { FC } from 'react'
import classes from './Location.module.scss'
import { LocationSectionType } from './types'

const Location: FC<LocationSectionType> = ({ data }) => {
    return (
        <section className={classes.Section}>
            <Container>
                {data.title && (
                    <Title>
                        <h2>{data.title}</h2>
                    </Title>
                )}
                <div className={classes.Inner}>
                    <div className={classes.Info}>
                        {data.address && (
                            <div className={classes.Row}>
                                <div className={classes.Caption}>Контактные данные компании</div>
                                <div
                                    className={classes.Address}
                                    dangerouslySetInnerHTML={{ __html: data.address }}
                                />
                            </div>
                        )}
                        {data.phone && (
                            <div className={classes.Row}>
                                <div className={classes.Caption}>Телефон и Whatsapp</div>
                                <a
                                    className={classes.Link}
                                    href={`tel:${data.phone}`}>
                                    {data.phone}
                                </a>
                            </div>
                        )}
                        {data.email && (
                            <div className={classes.Row}>
                                <div className={classes.Caption}>Email</div>
                                <a
                                    className={classes.Link}
                                    href={`mailto:${data.email}`}>
                                    {data.email}
                                </a>
                            </div>
                        )}
                        <div className={classes.Caption}>Карточка компании</div>
                        <div className={classes.Licenses}>
                            {data.items && data.items.length
                                ? data.items.map((el, i) => (
                                      <div
                                          key={i}
                                          className={classes.Image}>
                                          <CustomImage
                                              fill
                                              src={el}
                                              alt={''}
                                          />
                                      </div>
                                  ))
                                : null}
                        </div>
                        {data.link && (
                            <Button>
                                <Link href={data.link.href}>{data.link.title}</Link>
                            </Button>
                        )}
                    </div>
                    {data.map && (
                        <div className={classes.Map}>
                            <CustomImage
                                fill
                                src={data.map}
                                alt={''}
                            />
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default Location
