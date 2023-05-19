import classes from './Footer.module.scss'
import {FC} from "react";
import Container from "@/components/global/Container/Container";
import Link from "next/link";
import {FooterDataType} from "@/components/global/Footer/types";
import logo from '../../../images/icons/global/footer-logo.svg'
import CustomImage from "@/components/global/CustomImage/CustomImage";
import IconWhatsApp from "@/components/icons/IconWhatsApp";
import IconMail from "@/components/icons/IconMail";
import IconLinkArrow from "@/components/icons/IconLinkArrow";


const Footer: FC<FooterDataType> = ({navigation}) => {
    return (
        <footer className={classes.Wrap}>
            <Container className={classes.Container}>
                {navigation && navigation.length
                    ? navigation.map((col, i) =>
                        <div key={i} className={classes.Col}>
                            <div className={classes.Caption}>{col.title}</div>
                            <ul className={classes.List}>
                                {col.items && col.items.length
                                    ? col.items.map((link, index) =>
                                        <li key={index} className={classes.Item}>
                                            <Link className={classes.Link} href={link.href}>
                                                <span>{link.title}</span>
                                                <span className={classes.Icon}></span>
                                            </Link>
                                        </li>
                                    ) : null
                                }
                            </ul>
                        </div>)
                    : null}
            </Container>
            <div className={classes.Bot}>
                <Container className={classes.BotContainer}>
                    <Link className={classes.Logo} href={'/'}>
                        <CustomImage src={logo} alt={''}/>
                    </Link>
                    <div className={classes.Socials}>
                        <a href={'/'} className={classes.Social}>
                            <IconWhatsApp/>
                            <span>+66814232106</span>
                        </a>
                        <a href={'mailto:INFO@ALLIN.INFO'} className={classes.Social}>
                            <IconMail/>
                            <span>INFO@ALLIN.INFO</span>
                        </a>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer