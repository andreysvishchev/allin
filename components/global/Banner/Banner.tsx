import { FC } from 'react'
import Container from '../Container/Container'
import CustomImage from '../CustomImage/CustomImage'
import classes from './Banner.module.scss'
import { BannerType } from './types'

const Banner: FC<BannerType> = ({ data }) => {
    return (
        <div className={classes.Wrap}>
            {data?.image && (
                <div className={classes.Image}>
                    <CustomImage fill src={data.image} alt={''} />
                </div>
            )}
            <Container>
                <div className={classes.Inner}>
                    {data?.title && <h2 className={classes.Title}>{data.title}</h2>}
                    {data?.subtitle && <div className={classes.Subtitle}>{data.subtitle}</div>}
                </div>
            </Container>
        </div>
    )
}

export default Banner
