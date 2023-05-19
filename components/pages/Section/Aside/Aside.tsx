import {FC} from 'react'
import classes from './Aside.module.scss'
import CatalogLinks from './CatalogLinks/CatalogLinks'
import Filters from './Filters/Filters'

const Aside: FC = ({}) => {

    return (
        <div className={classes.Wrap}>
            <div className={classes.Title}>Каталог</div>
            <CatalogLinks/>
            <div className={classes.Title}>Фильтры</div>
            <Filters/>
        </div>
    )
}

export default Aside
