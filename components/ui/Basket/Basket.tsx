import IconBasket from '@/components/icons/IconBasket'
import classes from './Basket.module.scss'
const Basket = () => {
	return (
		<div className={classes.Wrap}>
			<button className={classes.Button}>
				<IconBasket />
			</button>
			<div className={classes.List}></div>
		</div>
	)
}

export default Basket
