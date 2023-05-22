import Container from '@/components/global/Container/Container'
import { FC } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Intro from './Intro/Intro'
import OverflowSlider from './OverflowSLider/OverflowSlider'
import classes from './Product.module.scss'
import { ProductPageType } from './types'


const Product: FC<ProductPageType> = ({ data }) => {
    return (
        <div className={classes.Wrap}>
            <Container>
                <Intro data={data.intro} />
                <Tabs selectedTabClassName={classes.Active} className={classes.Tabs}>
                    <TabList className={classes.TabList}>
                        <Tab className={classes.TabBtn}>Описание</Tab>
                        <Tab className={classes.TabBtn}>Характеристики</Tab>
                        <Tab className={classes.TabBtn}>Сертификаты</Tab>
                    </TabList>

                    <TabPanel>
                        <div className={classes.Desc} dangerouslySetInnerHTML={{ __html: data.desc }} />
                    </TabPanel>
                    <TabPanel>
                        {data.characteristics && data.characteristics.length
                            ? data.characteristics.map((el, i) =>
                                <div key={i} className={classes.Row}>
                                    <div className={classes.Key}>{el.name}</div>
                                    <div className={classes.Value} dangerouslySetInnerHTML={{ __html: el.text }} />
                                </div>)
                            : null}
                    </TabPanel>
                    <TabPanel>
                        {data.certificates && data.certificates.length ?
                            data.certificates.map((el, i) =>
                                <div key={i} className={classes.Certificate}>
                                    <div className={classes.CertificateTitle}>
                                        <span></span>
                                        {el.title}
                                    </div>
                                    <a className={classes.CertificateLink} href={el.href} download={true}>
                                        Скачать документ
                                        <span></span>
                                    </a>
                                </div>)
                            : null}
                    </TabPanel>
                </Tabs>
                <OverflowSlider data={data.products} />
            </Container>
        </div>
    )
}

export default Product
