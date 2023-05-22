import Container from '@/components/global/Container/Container'
import { FC } from 'react'
import Aside from './Aside/Aside'
import Products from './Products/Products'
import classes from './Section.module.scss'

const Section: FC = ({ }) => {

    return (
        <div className={classes.Wrap}>
            <Container>
                <h2 className={classes.Title}>Пищевая продукция</h2>
                <div className={classes.Inner}>
                    <Aside />
                    <div className={classes.Content}>
                        <Products />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section
