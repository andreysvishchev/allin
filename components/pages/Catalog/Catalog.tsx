import Container from '@/components/global/Container/Container'
import SectionItem from '@/components/pages/Catalog/SectionItem/SectionItem'
import { CatalogType } from '@/components/pages/Catalog/types'
import { FC } from 'react'
import classes from './Catalog.module.scss'

const Content: FC<CatalogType> = ({ data }) => {
    return (
        <section className={classes.Section}>
            <Container>
                {data && data.length
                    ? data.map((category, i) => (
                          <div key={i} className={classes.Category}>
                              <h2 className={classes.Title}>{category.title}</h2>
                              {category.items && category.items.length
                                  ? category.items.map((section, index) => (
                                        <SectionItem reverse={i % 2 !== 0} data={section} key={index} />
                                    ))
                                  : null}
                          </div>
                      ))
                    : null}
            </Container>
        </section>
    )
}

export default Content
