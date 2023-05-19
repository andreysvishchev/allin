import { FC, PropsWithChildren } from 'react'
import classes from './Modal.module.scss'

const Modal: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={classes.Wrap}>
			<div className={classes.Inner}>{children}</div>
		</div>
	)
}

export default Modal
