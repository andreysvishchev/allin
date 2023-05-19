import Container from '@/components/global/Container/Container'
import IconMail from '@/components/icons/IconMail'
import IconWhatsApp from '@/components/icons/IconWhatsApp'
import Basket from '@/components/ui/Basket/Basket'
import Search from '@/components/ui/Search/Search'
import SocialLink from '@/components/ui/SocialLink/SocialLink'
import Link from 'next/link'
import {FC} from 'react'
import logo from '../../../images/icons/global/header-logo.svg'
import CustomImage from '../CustomImage/CustomImage'
import classes from './Header.module.scss'
import {HeaderDataType} from "@/components/global/Heder/types";


const Header: FC<HeaderDataType> = ({navigation}) => {
    return (
        <header className={classes.Wrap}>
            <Container className={classes.Container}>
                <Link className={classes.Logo} href={'/'}>
                    <CustomImage src={logo} alt={''}/>
                </Link>
                <nav className={classes.Nav}>
                    {navigation && navigation.length
                        ? navigation.map((el, i) => (
                            <Link className={classes.Link} key={i} href={el.href}>
                                {el.title}
                            </Link>
                        ))
                        : null}
                </nav>
                <div className={classes.Box}>
                    <Search/>
                    <Basket/>
                    <div className={classes.Socials}>
                        <SocialLink className={classes.Social} href='/'>
                            <IconMail/>
                        </SocialLink>
                        <SocialLink className={classes.Social} href='/'>
                            <IconWhatsApp/>
                        </SocialLink>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
