import classes from './Button.module.scss'
import {FC, PropsWithChildren} from 'react'
import cn from 'classnames'
import {ButtonType} from "@/components/ui/Button/types";


const Button: FC<PropsWithChildren<ButtonType>> = ({children, className, type}) => {
    return (
        <div className={cn(classes.Wrap, className,
            {[classes.Transparent]: type === 'transparent'},
            {[classes.Dark]: type === 'dark'}
        )}>
            <span>
                {children}
            </span>
        </div>
    )
}

export default Button