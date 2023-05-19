import Container from '@/components/global/Container/Container'
import CustomImage from '@/components/global/CustomImage/CustomImage'
import Title from '@/components/global/Title/Title'
import { FC } from 'react'
import classes from './Help.module.scss'
import { HelpSection } from './types'

const Help: FC<HelpSection> = ({ data }) => {
    return (
        <section className={classes.Section}>
            <Container>
                {data.title && (
                    <Title>
                        <h2>{data.title}</h2>
                    </Title>
                )}
            </Container>
            <div className={classes.Inner}>
                <Container>
                    <div className={classes.Grid}>
                        {data.items && data.items.length
                            ? data.items.map((el, i) => (
                                  <div
                                      key={i}
                                      className={classes.Item}>
                                      {el.image && (
                                          <div className={classes.Image}>
                                              <CustomImage
                                                  fill
                                                  src={el.image}
                                                  alt={''}
                                              />
                                          </div>
                                      )}
                                      {el.title && <div className={classes.Caption}>{el.title}</div>}
                                  </div>
                              ))
                            : null}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Help
