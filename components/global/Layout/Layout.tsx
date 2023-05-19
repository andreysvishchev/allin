import Modal from '@/components/ui/Modal/Modal'
import { useModal } from '@/components/ui/Modal/store'
import cn from 'classnames'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { CSSTransition } from 'react-transition-group'
import Banner from '../Banner/Banner'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Connect from '../Connect/Connect'
import Footer from '../Footer/Footer'
import { mockData as FooterData } from '../Footer/mockData'
import Header from '../Heder/Header'
import { mockData as HeaderData } from '../Heder/mockData'
import classes from './Layout.module.scss'
import { LayoutType } from './types'

const Layout: FC<PropsWithChildren<LayoutType>> = ({ title, keywords, description, children, breadcrumbs, banner }) => {
    const modalControl = useModal()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
                />
                {keywords ? <meta name='keywords' content={keywords} /> : null}
                {description ? <meta name='description' content={description} /> : null}
            </Head>

            <div className={cn(classes.Site)}>
                <Header navigation={HeaderData.navigation} />

                {banner && <Banner type={banner.type} data={banner.data} />}

                {breadcrumbs && <Breadcrumbs path={breadcrumbs} />}

                <div className={classes.Wrap}>
                    <main className={classes.Main}>{children}</main>
                </div>

                <Connect />

                <Footer navigation={FooterData.navigation} />

                <CSSTransition in={modalControl.name === 'modal'} timeout={200} mountOnEnter={true} unmountOnExit={true}>
                    {state => <Modal />}
                </CSSTransition>
            </div>
        </>
    )
}

export default Layout
