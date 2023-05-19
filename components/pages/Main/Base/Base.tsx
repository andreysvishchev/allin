import Container from '@/components/global/Container/Container'
import CustomImage from '@/components/global/CustomImage/CustomImage'
import Title from '@/components/global/Title/Title'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import { FC, useId } from 'react'
import Collapsible from 'react-collapsible'
import classes from './Base.module.scss'
import { BaseSectionType } from './types'

const Base: FC<BaseSectionType> = ({ data }) => {
    const id = useId()
    return (
        <section className={classes.Section}>
            <Container>
                {data.title && (
                    <Title>
                        <h2>{data.title}</h2>
                    </Title>
                )}
                {data.items && data.items.length
                    ? data.items.map((el, i) => (
                          <Collapsible
                              key={i}
                              classParentString={classes.Accordion}
                              openedClassName={classes.Open}
                              contentElementId={`collapsible-content-${id}`}
                              triggerElementProps={{
                                  id: `collapsible-trigger-${id}`
                              }}
                              trigger={
                                  <div className={classes.Top}>
                                      {el.title && <div className={classes.Caption}>{el.title}</div>}
                                      {el.image && (
                                          <div className={classes.Image}>
                                              <CustomImage
                                                  fill
                                                  src={el.image}
                                                  alt={''}
                                              />
                                          </div>
                                      )}
                                      <button className={classes.Trigger} />
                                  </div>
                              }>
                              <div className={classes.Content}>
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
                          </Collapsible>
                      ))
                    : null}
                {data.link && (
                    <Button className={classes.More}>
                        <Link href={data.link.href}>{data.link.title}</Link>
                    </Button>
                )}
            </Container>
        </section>
    )
}

export default Base
