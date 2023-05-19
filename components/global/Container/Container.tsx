import {FC, PropsWithChildren, ReactNode} from 'react'
import classes from './Container.module.scss'
import cn from 'classnames'
import {ContainerType} from "@/components/global/Container/types";

const Container: FC<PropsWithChildren<ContainerType>> = ({children, className}) => {
    return (
        <div className={cn(classes.Wrap, className)}>
            {children}
        </div>
    )
}

export default Container