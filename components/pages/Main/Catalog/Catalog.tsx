import Container from '@/components/global/Container/Container'
import CustomImage from '@/components/global/CustomImage/CustomImage'
import Title from '@/components/global/Title/Title'
import IconLinkArrow from '@/components/icons/IconLinkArrow'
import Link from 'next/link'
import { FC } from 'react'
import classes from './Catalog.module.scss'
import { CatalogSectionType } from './types'

const Catalog: FC<CatalogSectionType> = ({ data }) => {
    return (
        <section className={classes.Section}>
            <Container>
                {data?.title && (
                    <Title>
                        <h2>{data.title}</h2>
                    </Title>
                )}
                <div className={classes.Inner}>
                    {data.items && data.items.length
                        ? data.items.map((col, index) => (
                              <div
                                  key={index}
                                  className={classes.Col}>
                                  {col.title && <div className={classes.Caption}>{col.title}</div>}
                                  {col.items && col.items.length
                                      ? col.items.map((el, i) => (
                                            <Link
                                                key={i}
                                                href={el.href}
                                                className={classes.Link}>
                                                {el.image && (
                                                    <div className={classes.Image}>
                                                        <CustomImage
                                                            fill
                                                            src={el.image}
                                                            alt={el.title}
                                                        />
                                                    </div>
                                                )}
                                                {el.title && (
                                                    <div
                                                        className={classes.Headline}
                                                        dangerouslySetInnerHTML={{ __html: el.title }}
                                                    />
                                                )}
                                                <div className={classes.Icon}>
                                                    <IconLinkArrow />
                                                </div>
                                            </Link>
                                        ))
                                      : null}
                              </div>
                          ))
                        : null}
                </div>
            </Container>
        </section>
    )
}

export default Catalog
