import classes from './Title.module.scss'
import {FC, PropsWithChildren} from 'react'
import cn from 'classnames'

type PropsType = {
    className?: string
}

const Title:FC<PropsWithChildren<PropsType>> = ({children, className}) => {
    return (
        <div className={cn(classes.Wrap, className)}>
            {children}
        </div>
    )
}

export default Title