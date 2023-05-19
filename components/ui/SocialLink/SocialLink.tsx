import cn from 'classnames'
import Link from 'next/link'
import { FC, PropsWithChildren, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import classes from './SocialLink.module.scss'
import {SocialLinkType} from "@/components/ui/SocialLink/types";

const SocialLink: FC<PropsWithChildren<SocialLinkType>> = ({
	children,
	href,
	className,
}) => {
	const [open, setOpen] = useState(false)

	const toggleMenu = () => {
		setOpen(!open)
	}

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className={cn(classes.Wrap, className, { [classes.Open]: open })}
		>
			<button onClick={toggleMenu} className={classes.Icon}>
				{children}
			</button>

			<CSSTransition
				in={open}
				timeout={200}
				mountOnEnter={true}
				unmountOnExit={true}
			>
				{() => (
					<div className={classes.Menu}>
						<button className={cn(classes.Button, classes.Yellow)}>
							скопировать
						</button>
						<Link href={href} className={cn(classes.Button, classes.Dark)}>
							Написать
						</Link>
					</div>
				)}
			</CSSTransition>
		</div>
	)
}

export default SocialLink
