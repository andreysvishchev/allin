import Container from '@/components/global/Container/Container'
import CustomImage from '@/components/global/CustomImage/CustomImage'
import Title from '@/components/global/Title/Title'
import { FC } from 'react'
import classes from './Benefits.module.scss'
import { BenefitsSectionType } from './types'

const Benefits: FC<BenefitsSectionType> = ({ data }) => {
    return (
        <section className={classes.Section}>
            <Container>
                {data.title && (
                    <Title>
                        <h2>{data.title}</h2>
                    </Title>
                )}
                <div className={classes.Grid}>
                    {data.items && data.items.length
                        ? data.items.map((el, i) => (
                              <div
                                  key={i}
                                  className={classes.Item}>
                                  <div className={classes.Top}>
                                      {el.num && <div className={classes.Num}>{el.num}</div>}
                                      {el.icon && (
                                          <div className={classes.Icon}>
                                              <CustomImage
                                                  src={el.icon}
                                                  alt={''}
                                              />
                                          </div>
                                      )}
                                  </div>
                                  {el.title && <div className={classes.Caption}>{el.title}</div>}
                                  {el.text && <div className={classes.Text}>{el.text}</div>}
                              </div>
                          ))
                        : null}
                </div>
            </Container>
        </section>
    )
}

export default Benefits
